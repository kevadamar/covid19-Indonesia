import '../component/search-bar.js'
import '../component/futerContent.js'
import myChart from '../component/myChart.js'
import '../component/date.js'
import {
    CountUp
} from "countup.js";
import responApi from "../models/index.js";


const main = async () => {

    const card1 = document.getElementById("card-1")
    const card2 = document.getElementById("card-2")
    const card3 = document.getElementById("card-3")

    let {
        charts
    } = myChart

    let positif, sembuh, meninggal;
    let {
        totalKasus,
    } = responApi
    let headers = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    let response = await totalKasus(headers)

    positif = response.jumlahKasus
    sembuh = response.sembuh
    meninggal = response.meninggal


    const easingFn = function (t, b, c, d) {
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t);
    }

    const options = {
        easingFn,
    };

    let count = new CountUp(card1, positif, options)
    let count2 = new CountUp(card2, sembuh, options)
    let count3 = new CountUp(card3, meninggal, options)
    let countHover2 = new CountUp(card1, positif, options)
    let countHover3 = new CountUp(card1, positif, options)

    //event card1
    card1.addEventListener("mouseover", e => {
        e.target.style.cursor = "pointer"
        e.target.style.backgroundColor = "#f1f1f1"
        e.target.style.color = "rgba(75,0, 0, 0.8)"
        e.target.textContent = "Kasus Positif"

        console.log(e.target.textContent, "in")
    })

    card1.addEventListener("mouseout", e => {
        let countHover1 = new CountUp(card1, positif, options)
        e.target.style.cursor = "pointer"
        e.target.style.backgroundColor = "rgba(75,0, 0, 0.8)"
        e.target.style.color = "#f1f1f1"

        if (!countHover1.error) {
            countHover1.start()
            console.log("okestart")
        } else {
            console.log("errormas")
        }
    }) //end event card1

    //event card2
    card2.addEventListener("mouseover", e => {
        e.target.style.cursor = "pointer"
        e.target.style.backgroundColor = "#f1f1f1"
        e.target.style.color = "rgb(44, 238, 86)"
        e.target.textContent = "Sembuh"

        console.log(e.target.textContent, "in")
    })

    card2.addEventListener("mouseout", e => {
        let countHover2 = new CountUp(card2, sembuh, options)
        e.target.style.cursor = "pointer"
        e.target.style.backgroundColor = "rgb(44, 238, 86)"
        e.target.style.color = "#f1f1f1"

        if (!countHover2.error) {
            countHover2.start()
            console.log("okestart")
        } else {
            console.log("errormas")
        }
    }) //end event card2

    //event card3
    card3.addEventListener("mouseover", e => {
        e.target.style.cursor = "pointer"
        e.target.style.backgroundColor = "#f1f1f1"
        e.target.style.color = "rgb(241, 7, 7)"
        e.target.textContent = "meninggal"

        console.log(e.target.textContent, "in")
    })

    card3.addEventListener("mouseout", e => {
        let countHover3 = new CountUp(card3, meninggal, options)
        e.target.style.cursor = "pointer"
        e.target.style.backgroundColor = "rgb(241, 7, 7)"
        e.target.style.color = "#f1f1f1"

        if (!countHover3.error) {
            countHover3.start()
            console.log("okestart")
        } else {
            console.log("errormas")
        }
    }) //end event card3

    setTimeout(() => {
        document.getElementById("source").style.display = "none";
        document.querySelector(".header").style.display = "inline";
        document.querySelector(".footer").style.display = "block";
        document.querySelector(".kanvas").style.display = "block";


        charts()
        if (!count.error && !count2.error && !count3.error) {
            count.start()
            count2.start()
            count3.start()
        } else {
            console.log(count.error)
        }
    }, 1950);
};

export default main;