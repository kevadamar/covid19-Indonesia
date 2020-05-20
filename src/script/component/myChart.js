import Chart from "chart.js";
import responApi from "../models/index.js";
import {
  chart1,
  chart2,
  chart3
} from "./chartsConfig.js"

let {
  harian
} = responApi

// let bol = false;
const charts = async function (det, bool = false) {
  let cek = bool
  let positif = [],
    sembuh = [],
    meninggal = [],
    tgl = []

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

  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  let response = await harian()

  response = response.data.filter(val => val.jumlahKasusBaruperHari !== null)

  response = response.filter(val => new Date(val.tanggal).getMonth() === (det !== undefined ? new Date(det).getMonth() : new Date().getMonth()))


  //script update bug start

  if (cek) {

    //chart1 start
    let ctx1 = document.getElementById("myChart1")
    let ren1 = document.querySelector("#parent1 .chartjs-size-monitor")
    ren1.remove()
    ctx1.remove()
    const parent1 = document.getElementById("parent1")
    let el1 = document.createElement('canvas')
    el1.id = 'myChart1'
    el1.width = '400'
    el1.height = `400`
    parent1.appendChild(el1)
    //chart1 end

    //chart2 start
    let ctx2 = document.getElementById("myChart2")
    let ren2 = document.querySelector("#parent2 .chartjs-size-monitor")
    ren2.remove()
    ctx2.remove()
    const parent2 = document.getElementById("parent2")
    let el2 = document.createElement('canvas')
    el2.id = 'myChart2'
    el2.width = '400'
    el2.height = `400`
    parent2.appendChild(el2)
    //chart2 end

    //chart3 start
    let ctx3 = document.getElementById("myChart3");
    let ren3 = document.querySelector("#parent3 .chartjs-size-monitor")
    ren3.remove()
    ctx3.remove()
    const parent3 = document.getElementById("parent3")
    let el3 = document.createElement('canvas')
    el3.id = 'myChart3'
    el3.width = '400'
    el3.height = `400`
    parent3.appendChild(el3)
    //chart3 end
    cek = false
  }
  let varchart1 = chart1()
  let varchart2 = chart2()
  let varchart3 = chart3()

  response.forEach((val) => {
    let tanggal = new Date(val.tanggal).getDate();
    tgl.push(monthNames[new Date(val.tanggal).getMonth()] + " " + tanggal);
    positif.push(val.jumlahKasusBaruperHari);
    sembuh.push(val.jumlahKasusSembuhperHari);
    meninggal.push(val.jumlahKasusMeninggalperHari);

  });

  varchart1.data.datasets[0].data = positif
  varchart1.data.labels = tgl
  varchart1.update()

  varchart2.data.datasets[0].data = sembuh
  varchart2.data.labels = tgl
  varchart2.update()

  varchart3.data.datasets[0].data = meninggal
  varchart3.data.labels = tgl
  varchart3.update()

  //end

};


const myChart = {
  charts,
}
export default myChart

// export default bol;