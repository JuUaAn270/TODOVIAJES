
const $grafica1 = document.querySelector("#grafica1");
const $grafica2 = document.querySelector("#grafica2");
const etiquetas = ["Reservas Junio - 2022", "Reservas Julio - 2022", "Reservas Agosto - 2022", "Reservas Septiembre - 2022"]


const visitasParis = {
    label: "París",
    data: [500, 900, 134, 2000],
    backgroundColor: 'red',
    borderColor: 'rgba(211,93,110, 1)',
    borderWidth: 3,
};
const visitasVenecia = {
    label: "Venecia",
    data: [700, 700, 4500, 2500],
    backgroundColor: 'yellow',
    borderColor: 'rgba(209,234,163,1)',
    borderWidth: 3,
};
const visitasIbiza = {
    label: "Ibiza",
    data: [5000, 1500, 8000, 5102],
    backgroundColor: 'blue',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 3,
};
const visitasValencia = {
    label: "Valencia",
    data: [10000, 1700, 5000, 5989], 
    backgroundColor: 'orange',
    borderColor: 'rgba(255, 159, 64, 1)',
    borderWidth: 3,
};

new Chart($grafica1, {
    type: 'line',
    data: {
        labels: etiquetas,
        datasets: [
            visitasParis,
            visitasVenecia,
            visitasIbiza,
            visitasValencia,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
new Chart($grafica2, {
    type: 'bar',
    data: {
        labels: etiquetas,
        datasets: [
            visitasParis,
            visitasVenecia,
            visitasIbiza,
            visitasValencia,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
