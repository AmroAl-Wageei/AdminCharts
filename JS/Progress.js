// Get the canvas element
const canvas = document.getElementById("progress-chart");

// Define the progress value (between 0 and 100)
const progressValue = 75;

// Calculate the angle (in radians) for the progress value
const angle = (progressValue / 50) * Math.PI;

// Create the chart object
const chart = new Chart(canvas, {
  type: "doughnut",
  data: {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [progressValue, 100 - progressValue],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(0, 0, 0, 0.8)"],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutoutPercentage: 50,
    rotation: -0.5 * Math.PI,
    circumference: Math.PI,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    animation: {
      animateRotate: false,
      animateScale: false,
    },
    elements: {
      center: {
        text: `${progressValue}%`,
        color: "#000",
        fontStyle: "Arial",
        sidePadding: 20,
        minFontSize: 20,
        maxFontSize: 30,
        lineHeight: 1.2,
      },
    },
  },
});
