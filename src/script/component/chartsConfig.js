import Chart from "chart.js";

export const chart1 = () => {
    let ctx1 = document.getElementById("myChart1").getContext("2d");
    return new Chart(ctx1, {
        type: "line",
        data: {
            labels: '',
            datasets: [{
                label: "Kasus Positif",
                data: '',
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
                    hoverRadius: 10,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    })
}

export const chart2 = () => {
    let ctx2 = document.getElementById("myChart2").getContext("2d");
    return new Chart(ctx2, {
        type: "line",
        data: {
            labels: '',
            datasets: [{
                label: "Sembuh",
                data: '',
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
                    hoverRadius: 10,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    })
}

export const chart3 = () => {
    let ctx3 = document.getElementById("myChart3").getContext("2d");
    const ll = new Chart(ctx3, {
        type: "line",
        data: {
            labels: '',
            datasets: [{
                label: "Meninggal",
                data: [],
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
            elements: {
                point: {
                    hoverRadius: 10,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    })

    return ll
}