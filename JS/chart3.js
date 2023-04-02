//Progress Chart

const dataPro = {
  labels: [
    0,
    1,
    2,
    3,
    4,
    ,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
  ],
  datasets: [
    {
      label: "as of 25 May 2023, 09:41 PM",
      data: [0, 10, 20, 30, 40, 50, 60],
      backgroundColor: ["rgba(255, 26, 104, 0.2)"],
      borderColor: ["rgba(255, 26, 104, 1)"],
      borderWidth: 1,
    },
  ],
};

// config
const configPro = {
  type: "line",
  data: dataPro,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const ProChart = new Chart(document.getElementById("ProChart"), configPro);
