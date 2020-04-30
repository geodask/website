import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    props: ['chartData', 'options'],
    mixins: [reactiveProp],
    data() {
        return {
            drag: false,
        }
    },
    mounted() {

        this.renderChart(this.chartData, this.options);


        var overlay = document.getElementById('overlay');
        var startIndex = 0;
        overlay.width = this.$refs.canvas.width;
        overlay.height = this.$refs.canvas.height;
        var selectionContext = overlay.getContext('2d');
        var selectionRect = {
            w: 0,
            startX: 0,
            startY: 0
        };
        var drag = false;
        this.$refs.canvas.addEventListener('pointerdown', evt => {
            const points = this.$data._chart.getElementsAtEventForMode(evt, 'index', {
                intersect: false
            });
            startIndex = points[0]._index;
            const rect = this.$refs.canvas.getBoundingClientRect();
            selectionRect.startX = evt.clientX - rect.left;
            selectionRect.startY = this.$data._chart.chartArea.top;
            drag = true;
            // save points[0]._index for filtering
        });
        this.$refs.canvas.addEventListener('pointermove', evt => {

            const rect = this.$refs.canvas.getBoundingClientRect();
            if (drag) {
                const rect = this.$refs.canvas.getBoundingClientRect();
                selectionRect.w = (evt.clientX - rect.left) - selectionRect.startX;
                selectionContext.globalAlpha = 0.5;
                selectionContext.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
                selectionContext.fillRect(selectionRect.startX,
                    selectionRect.startY,
                    selectionRect.w,
                    this.$data._chart.chartArea.bottom - this.$data._chart.chartArea.top);
            } else {
                selectionContext.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
                var x = evt.clientX - rect.left;
                if (x > this.$data._chart.chartArea.left) {
                    selectionContext.fillRect(x,
                        this.$data._chart.chartArea.top,
                        1,
                        this.$data._chart.chartArea.bottom - this.$data._chart.chartArea.top);
                }
            }
        });
        this.$refs.canvas.addEventListener('pointerup', evt => {

            const points = this.$data._chart.getElementsAtEventForMode(evt, 'index', {
                intersect: false
            });
            drag = false;



            const start = this.chartData.labels[startIndex];

            const end = this.chartData.labels[points[0]._index];

            const indexStart = this.chartData.labels.indexOf(start);
            const indexEnd = this.chartData.labels.indexOf(end);
            console.log(indexStart, indexEnd);


            this.chartData.labels = this.chartData.labels.slice(indexStart, indexEnd);
            this.chartData.datasets[0].data = this.chartData.datasets[0].data.slice(indexStart, indexEnd);
            this.chartData.datasets[1].data = this.chartData.datasets[1].data.slice(indexStart, indexEnd);

            const tmp = { ...this.chartData };
            this.chartData = null;
            this.chartData = tmp;

            console.log(this.chartData);
            // console.log('implement filter between ' + this.chartData.labels[startIndex] + ' and ' + this.chartData.labels[points[0]._index]);
        });



    }
}