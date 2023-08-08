function createGradient(ctx, colors) {
  const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  gradient.addColorStop(0.5, colors[0]);
  gradient.addColorStop(1, colors[1]);
  return gradient;
}
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("lineGraph").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 13, 4, 12, 20],
          borderWidth: 2,
          backgroundColor: createGradient(ctx, ["#283618", "#B2C186"]),
          borderColor: "#fefae0",
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        x: {
          ticks: {
            color: "#fefae0",
            fontWeight: "bolder",
          },
        },
        y: {
          ticks: {
            color: "#fefae0",
            fontWeight: "bolder",
          },
          title: {
            display: true,
            text: "Degree °C", // Change the y-axis label here
            color: "#fefae0",
            fontWeight: "bolder",
          },
        },
      },
      tension: 0.4,
    },
  });
});
