const sqlite3 = require("sqlite3").verbose();
const db1 = new sqlite3.Database(":memory:");

// Serialize database operations for proper order
db1.serialize(() => {
	db1.run(`CREATE TABLE lineup (
        year INTEGER,
        artist TEXT,
        time TEXT
    )`);

	const stmt = db1.prepare(
		`INSERT INTO lineup (year, artist, time) VALUES (?, ?, ?)`
	);

	const lineupData = [
		[2022, "Marcysia", "16:00 - 17:00"],
		[2022, "Jakub Skorupa", "17:00-18:00"],
		[2022, "Marek Piekarczyk", "18:00-19:00"],
		[2022, "Olivia Rodrigo", "19:00-20:00"],
		[2022, "Katy Perry", "20:00-21:00"],
		[2022, "Dj Fantastic", "21:00 - 23:00"],
		[2022, "Dj Galaxy", "23:00-01:00"],
		[2022, "Dj LoudHorn", "01:00-03:00"],
		[2023, "Marek Piekarczyk", "16:00 - 17:00"],
		[2023, "Edyta Gorniak", "17:00-18:00"],
		[2023, "Bad Boys Blue", "18:00-19:00"],
		[2023, "Guns and Roses", "19:00-20:00"],
		[2023, "Abba", "20:00-21:00"],
		[2023, "Dj Plastic", "21:00 - 23:00"],
		[2023, "Dj Blue", "23:00-01:00"],
		[2023, "Dj VonHorst", "01:00-03:00"],
		[2024, "Lady Gaga", "16:00 - 17:00"],
		[2024, "Zenek Martyniuk", "17:00-18:00"],
		[2024, "Britney Spears", "18:00-19:00"],
		[2024, "Metallica", "19:00-20:00"],
		[2024, "Boys", "20:00-21:00"],
		[2024, "Dj Omen", "21:00 - 23:00"],
		[2024, "Dj Kartofel", "23:00-01:00"],
		[2024, "Dj Base", "01:00-03:00"],
	];

	lineupData.forEach((data) => {
		stmt.run(data);
	});

	stmt.finalize();
});

module.exports = db1;
