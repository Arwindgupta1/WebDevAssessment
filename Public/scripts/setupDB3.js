const sqlite3 = require("sqlite3").verbose();
const db3 = new sqlite3.Database(":memory:");

db3.serialize(() => {
	db3.run(`CREATE TABLE lineup_stage2 (
    year INTEGER,
    artist TEXT,
    time TEXT
  )`);

	const stmt = db3.prepare(
		`INSERT INTO lineup_stage2 (year, artist, time) VALUES (?, ?, ?)`
	);

	const lineupDataStage2 = [
		[2022, "The Deedle Deedle Dees", "16:00 - 17:00"],
		[2022, "Recess Monkey", "17:00-18:00"],
		[2022, "Guns and Roses", "18:00-19:00"],
		[2022, "ATB", "19:00-20:00"],
		[2022, "LE TWINS", "20:00-21:00"],
		[2022, "NAELECK", "21:00 - 23:00"],
		[2022, "DJ SNAKE", "23:00-01:00"],
		[2022, "ERIC PRYDZ", "01:00-03:00"],
		[2023, "Alvin and the Chipmunks", "16:00 - 17:00"],
		[2023, "They Might Be Giants", "17:00-18:00"],
		[2023, "Bad Boys Blue", "18:00-19:00"],
		[2023, "Tiësto", "19:00-20:00"],
		[2023, "ARMIN VAN BUUREN", "20:00-21:00"],
		[2023, "BASSJACKERS", "21:00 - 23:00"],
		[2023, "MARSHMELLO", "23:00-01:00"],
		[2023, "PAUL VAN DYK", "01:00-03:00"],
		[2024, "The Wiggles", "16:00 - 17:00"],
		[2024, "The Muppets", "17:00-18:00"],
		[2024, "The Kelly Family", "18:00-19:00"],
		[2024, "Kentish Gents", "19:00-20:00"],
		[2024, "Midsummer Knights", "20:00-21:00"],
		[2024, "Ultraglow", "21:00 - 23:00"],
		[2024, "Dj Bartheez", "23:00-01:00"],
		[2024, "David Guetta", "01:00-03:00"],
	];

	lineupDataStage2.forEach((data) => {
		stmt.run(data);
	});

	stmt.finalize();
});

module.exports = db3;
