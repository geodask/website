const charts = [
  {
    data: {
      labels: [
        new Date("01-03-2020"),
        new Date("01-06-2020"),
        new Date("01-09-2020"),
        new Date("01-10-2020"),
        new Date("01-16-2020"),
        new Date("01-17-2020"),
        new Date("01-21-2020"),
        new Date("01-22-2020"),
        new Date("01-23-2020"),
        new Date("01-26-2020"),
        new Date("01-29-2020"),
        new Date("01-30-2020"),
        new Date("01-31-2020"),
        new Date("02-01-2020"),
        new Date("02-04-2020"),
        new Date("02-06-2020"),
        new Date("02-09-2020"),
        new Date("02-11-2020"),
        new Date("02-25-2020"),
        new Date("03-01-2020"),
        new Date("03-06-2020"),
        new Date("03-08-2020"),
        new Date("03-09-2020"),
        new Date("03-11-2020"),
        new Date("03-16-2020"),
        new Date("03-20-2020"),
        new Date("03-23-2020"),
        new Date("03-24-2020"),
        new Date("03-25-2020"),
        new Date("03-26-2020"),
        new Date("03-30-2020"),
        new Date("04-14-2020")
      ],
      datasets: [{
        label: "2019",
        borderColor: "rgb(255, 0, 0)",
        lineTension: 0,
        data: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          5,
          5,
          5,
          5,
          5,
          6,
          6,
          6
        ]

      },
      {
        label: "2020",
        borderColor: "rgb(0, 0, 255)",
        lineTension: 0,
        data: [
          0,
          0,
          1,
          1,
          1,
          3,
          3,
          3,
          3,
          3,
          3,
          4,
          4,
          5,
          5,
          5,
          5,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          13,
          14,
          15,
          15,
          15,
          15
        ]


      }
      ]
    },
    options: {
      title: {
        text: "Andamento decessi per comune - anni 2019 e 2020",
        display: true
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day',
            minUnit: 'day',
            tooltipFormat: 'll'
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },

        }]
      },
      plugins: {
        zoom: {
          pan: {
            enabled: false,
            mode: 'xy'
          },
          zoom: {
            drag: {
              borderColor: 'rgba(0,0,0,0.4)',
              borderWidth: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              animationDuration: 1000
            },
            enabled: true,
            mode: 'x',
            speed: 0.05,
            sensitivity: 10,
          }
        }
      },
    }
  }
];

// var randomScalingFactor = function () {
//   return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
// };


export class ChartService {

  static async getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(charts);
      }, 500);
    });
  }
}
