import React from "react";
import dataJson from "../../data/data.json";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const CharBar = () => {
  const labels = dataJson.map((day) => day.day);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataJson.map((amount) => amount.amount),
        backgroundColor: "hsl(10, 79%, 65%)",
        borderColor: "hsl(10, 79%, 65%)",
        borderRadius: 5,
        barPercentage: 0.8,
        hoverBackgroundColor: ["hsl(186, 34%, 60%)"],
        borderSkipped: false,
      },
    ],
  };

  const option = {
    aspectRatio: 2.5,
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        yAlign: "bottom",
        backgroundColor: "hsl(25, 47%, 15%)",
        caretSize: 0,
        caretPadding: 8,
        bodyFont: {
          size: 18,
        },
        callbacks: {
          title: function (context) {
            return "";
          },
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={option} height="100px" />;
};

export default CharBar;
