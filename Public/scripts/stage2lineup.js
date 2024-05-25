document.addEventListener("DOMContentLoaded", function () {
	const lineupDiv = document.getElementById("lineup");
	const radios = document.querySelectorAll('input[name="year"]');

	const fetchLineup = (year) => {
		fetch(`/lineup_stage2/${year}`)
			.then((response) => response.json())
			.then((data) => {
				lineupDiv.innerHTML = "";
				data.forEach((artist) => {
					const artistDiv = document.createElement("div");
					artistDiv.classList.add("artist");
					artistDiv.innerHTML = `<div class="artist-name">${artist.artist}</div><div class="artist-time">${artist.time}</div>`;
					lineupDiv.appendChild(artistDiv);
				});
			});
	};

	radios.forEach((radio) => {
		radio.addEventListener("change", () => {
			fetchLineup(radio.value);
		});
	});

	fetchLineup(2024); // Fetch initial data for the default year
});
