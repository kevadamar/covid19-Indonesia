import Chart from "chart.js";
import axios from "axios";
let moment = require("moment");

let datas = [],
  positif = [],
  sembuh = [],
  meninggal = [],
  tgl = [];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

window.onload = async () => {
  setTimeout(() => {
    document.querySelector(".kanvas").style.display = "block"
    document.querySelector(".kanvas").style.maxWidth = "100%"
    document.getElementById("source").style.display = "none"
    document.querySelector("header").style.display = "inline"
    document.querySelector("footer").style.display = "block"
    document.querySelector("main").style.marginTop = "32px"
  }, 2000);
  let ctx = document.getElementById("myChart").getContext("2d");
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios
    .get(`https://indonesia-covid-19.mathdro.id/api/harian`, headers)
    .then((res) => {
      let response = res.data.data.filter(val => val.fid > (res.data.data.length - 10));
      response.forEach((val) => {
        let tanggal = new Date(val.tanggal).getDate();
        tgl.push(monthNames[new Date(val.tanggal).getMonth()] + " " + tanggal);
        sembuh.push(val.jumlahKasusSembuhperHari);
        positif.push(val.jumlahKasusBaruperHari);
        meninggal.push(val.jumlahKasusMeninggalperHari);
      });
      // console.log(response);
    });

  setTimeout(() => {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: tgl,
        datasets: [{
            label: "Positif",
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

          },
          {
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
            lineTension: 0
          },
          {
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
            lineTension: 0
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }]
        },
        title: {
          display: true,
          text: "Chart Covid19 Di Indonesia",
        },
        animation: {
          duration: 2000,
        },
        hover: {
          animationDuration: 800,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        elements: {
          point: {
            hoverRadius: 8,
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: "index"
        }
      },
    });
  }, 2000);
};