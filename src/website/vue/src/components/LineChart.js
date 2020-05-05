import { Line, mixins } from 'vue-chartjs'
// import _ from 'lodash';
import zoomPlugin from 'chartjs-plugin-zoom';

export default {
    extends: Line,
    props: ['chartData', 'options'],
    mixins: [mixins.reactiveProp],
    data() {
        return {
            oldData: {},
            drag: false,
            dataHistory: [],
            scrollStatus: {
                wheeling: false,
                functionCall: false
            },
            scrollTimer: false,
            renderData: {}
        }
    },

    created() {
        this.renderData = this.chartData;
    },

    watch: {
        renderData() {
            this.renderChart(this.renderData, this.options);
        }
    },

    mounted() {
        this.addPlugin(zoomPlugin);
        this.renderChart(this.renderData, this.options);
    }

    // mounted() {

    //     const overlay = document.createElement('canvas');
    //     overlay.width = 600;
    //     overlay.height = 200;
    //     overlay.id = "OVERLAY_ID";
    //     overlay.style.position = 'absolute';
    //     overlay.style.maxHeight = '200';
    //     overlay.style.maxWidth = 'auto';
    //     // overlay.style.padding = '20px';
    //     overlay.style.pointerEvents = 'none';

    //     this.$el.parentElement.insertBefore(overlay, this.$el.parentElement.firstChild);


    //     this.renderChart(this.renderData, this.options);


    //     //  overlay = document.getElementById('overlay');
    //     var startIndex = 0;
    //     overlay.width = this.$refs.canvas.width;
    //     overlay.height = this.$refs.canvas.height;
    //     var selectionContext = overlay.getContext('2d');
    //     var selectionRect = {
    //         w: 0,
    //         startX: 0,
    //         startY: 0
    //     };
    //     var drag = false;
    //     this.$refs.canvas.addEventListener('pointerdown', evt => {
    //         this.dataHistory.push(_.cloneDeep(this.renderData));

    //         const points = this.$data._chart.getElementsAtEventForMode(evt, 'index', {
    //             intersect: false
    //         });

    //         startIndex = points[0]._index;
    //         const rect = this.$refs.canvas.getBoundingClientRect();
    //         selectionRect.startX = evt.clientX - rect.left;
    //         selectionRect.startY = this.$data._chart.chartArea.top;
    //         drag = true;
    //         // save points[0]._index for filtering
    //     });
    //     this.$refs.canvas.addEventListener('pointermove', evt => {

    //         const rect = this.$refs.canvas.getBoundingClientRect();
    //         if (drag) {
    //             const rect = this.$refs.canvas.getBoundingClientRect();
    //             selectionRect.w = (evt.clientX - rect.left) - selectionRect.startX;
    //             selectionContext.globalAlpha = 0.5;
    //             selectionContext.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
    //             selectionContext.fillRect(selectionRect.startX,
    //                 selectionRect.startY,
    //                 selectionRect.w,
    //                 this.$data._chart.chartArea.bottom - this.$data._chart.chartArea.top);
    //         } else {
    //             selectionContext.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
    //             var x = evt.clientX - rect.left;
    //             if (x > this.$data._chart.chartArea.left) {
    //                 selectionContext.fillRect(x,
    //                     this.$data._chart.chartArea.top,
    //                     1,
    //                     this.$data._chart.chartArea.bottom - this.$data._chart.chartArea.top);
    //             }
    //         }
    //     });
    //     this.$refs.canvas.addEventListener('pointerup', evt => {

    //         const points = this.$data._chart.getElementsAtEventForMode(evt, 'index', {
    //             intersect: false
    //         });
    //         drag = false;



    //         const start = this.renderData.labels[startIndex];

    //         const end = this.renderData.labels[points[0]._index];

    //         let indexStart = this.renderData.labels.indexOf(start);
    //         let indexEnd = this.renderData.labels.indexOf(end);

    //         console.log(indexStart, indexEnd);


    //         if (indexStart > indexEnd) {
    //             const tmp = indexEnd;
    //             indexEnd = indexStart;
    //             indexStart = tmp;
    //         }

    //         console.log(indexStart, indexEnd);




    //         this.renderData.labels = this.renderData.labels.slice(indexStart, indexEnd);
    //         this.renderData.datasets[0].data = this.renderData.datasets[0].data.slice(indexStart, indexEnd);
    //         this.renderData.datasets[1].data = this.renderData.datasets[1].data.slice(indexStart, indexEnd);

    //         const tmp = { ...this.renderData };
    //         this.renderData = null;
    //         this.renderData = tmp;





    //         // console.log('implement filter between ' + this.renderData.labels[startIndex] + ' and ' + this.renderData.labels[points[0]._index]);
    //     });

    //     this.$refs.canvas.addEventListener('wheel', (event) => {
    //         this.scrollStatus.wheeling = true;
    //         event.preventDefault();
    //         event.stopPropagation();

    //         if (!this.scrollStatus.functionCall) {

    //             if (event.deltaY > 0) {

    //                 if (this.dataHistory.length - 1 < 0) {
    //                     return;
    //                 }

    //                 this.renderData.labels = this.dataHistory[this.dataHistory.length - 1].labels;
    //                 this.renderData.datasets[0].data = this.dataHistory[this.dataHistory.length - 1].datasets[0].data;
    //                 this.renderData.datasets[1].data = this.dataHistory[this.dataHistory.length - 1].datasets[1].data;

    //                 const tmp = { ...this.renderData };
    //                 this.renderData = null;
    //                 this.renderData = tmp;

    //                 this.dataHistory = this.dataHistory.slice(0, this.dataHistory.length - 1);

    //             }
    //             this.scrollStatus.functionCall = true;
    //             clearInterval(this.scrollTimer);
    //             this.scrollTimer = setTimeout(() => {
    //                 this.scrollStatus.wheeling = false;
    //                 this.scrollStatus.functionCall = false;
    //             }, 50)
    //         }


    //     })



    // }
}