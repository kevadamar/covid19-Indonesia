import Chart from "chart.js";
import responApi from "../models/index.js";

let {
  harian
} = responApi

// let bol = false;
const charts = async (det) => {
  let positif = [],
    sembuh = [],
    meninggal = [],
    tgl = [],
    config, config2, config3;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let ctx = document.getElementById("myChart").getContext("2d");
  let ctx2 = document.getElementById("myChart2").getContext("2d");
  let ctx3 = document.getElementById("myChart3").getContext("2d");

  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let response = await harian()

  response = response.data.filter(val => val.jumlahKasusBaruperHari !== null)
  response = response.filter(val => new Date(val.tanggal).getMonth() === new Date(det).getMonth())
  response.forEach((val) => {
    let tanggal = new Date(val.tanggal).getDate();
    tgl.push(monthNames[new Date(val.tanggal).getMonth()] + " " + tanggal);
    sembuh.push(val.jumlahKasusSembuhperHari);
    positif.push(val.jumlahKasusBaruperHari);
    meninggal.push(val.jumlahKasusMeninggalperHari);
    let tr = new Date(val.tanggal).getDate()
  });
  // console.log(response);
  //   });

  config = {
    type: "line",
    data: {
      labels: tgl,
      datasets: [{
        label: "Kasus Positif",
        data: positif,
        backgroundColor: ["rgba(175, 92, 192, 0.2)"],
        borderColor: ["rgba(75,0, 0, 1)"],
        borderWidth: 2,
        radius: 20,
        pointBackgroundColor: "rgba(75,0, 0, 1)",
        spanGaps: true,
        pointRadius: 4,
        hoverBackgroundColor: "rgba(75,0, 0, 1)",
        pointHoverBorderWidth: 10,
        lineTension: 0,
        borderJoinStyle: "bevel",
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 1000
          },
        }],
      },
      animation: {
        duration: 2000,
      },
      hover: {
        animationDuration: 800,
      },
      layout: {
        padding: {
          left: 13,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      elements: {
        point: {
          hoverRadius: 8,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
      },
    },
  }
  config2 = {
    type: "line",
    data: {
      labels: tgl,
      datasets: [{
        label: "Sembuh",
        data: sembuh,
        backgroundColor: ["rgba(154, 62, 235, 0.2)"],
        borderColor: ["rgba(75, 192, 0, 1)"],
        borderWidth: 2,
        radius: 20,
        pointBackgroundColor: "rgba(75, 192, 0, 1)",
        spanGaps: true,
        pointRadius: 4,
        hoverBackgroundColor: "green",
        pointHoverBorderWidth: 10,
        lineTension: 0,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 1000
          },
        }],
      },

      animation: {
        duration: 2000,
      },
      hover: {
        animationDuration: 800,
      },
      layout: {
        padding: {
          left: 13,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      elements: {
        point: {
          hoverRadius: 8,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
      },
    },
  }
  config3 = {
    type: "line",
    data: {
      labels: tgl,
      datasets: [{
        label: "Meninggal",
        data: meninggal,
        backgroundColor: ["rgba(154, 62, 235, 0.2)"],
        borderColor: ["red"],
        borderWidth: 2,
        radius: 20,
        pointBackgroundColor: "red",
        spanGaps: true,
        pointRadius: 4,
        hoverBackgroundColor: "red",
        pointHoverBorderWidth: 10,
        lineTension: 0,
      }, ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMax: 1000
          },
        }],
      },
      animation: {
        duration: 2000,
      },
      hover: {
        animationDuration: 800,
      },
      layout: {
        padding: {
          left: 13,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      elements: {
        point: {
          hoverRadius: 8,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
      },
    },
  }

  let chart1 = new Chart(ctx, config),
    chart2 = new Chart(ctx2, config2),
    chart3 = new Chart(ctx3, config3);
};


const myChart = {
  charts,
}
export default myChart

// export default bol;