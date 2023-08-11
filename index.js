const apiKey = "ec5a811cce5a8bb1b38494949571c57f";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";
async function weatherData() {
	const respond = await fetch(apiUrl + `&appid=${apiKey}`);
	var data = await respond.json();
	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".Degree").innerHTML =
		Math.round(data.main.temp) + "°";
	document.querySelector(".feelsLike").innerHTML =
		Math.round(data.main.feels_like) + "°";
	document.querySelector(".humidityValue").innerHTML =
		data.main.humidity + " % ";
	document.querySelector(".pressureValue").innerHTML =
		data.main.pressure + " hpa";
	document.querySelector(".Wind").innerHTML = data.wind.speed + " Km/h";
}
setInterval(() => {
	const dateTime = new Date();
	const formatter = new Intl.DateTimeFormat("en-IN", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
		timeZone: "Asia/Kolkata",
	});
	document.querySelector(".time").innerHTML = formatter.format(dateTime);
});
weatherData();
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
