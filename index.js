const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db1 = require("./public/scripts/setupDB");
const db2 = require("./database");
const db3 = require("./public/scripts/setupDB3");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.get("/lineup/:year", (req, res) => {
	const year = parseInt(req.params.year, 10);
	db1.all(
		`SELECT artist, time FROM lineup WHERE year = ?`,
		[year],
		(err, rows) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(rows);
			}
		}
	);
});

app.get("/lineup_stage2/:year", (req, res) => {
	const year = parseInt(req.params.year, 10);
	db3.all(
		`SELECT artist, time FROM lineup_stage2 WHERE year = ?`,
		[year],
		(err, rows) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(rows);
			}
		}
	);
});

app.post("/submit-form", (req, res) => {
	const { name, email, message } = req.body;
	db2.run(
		"INSERT INTO formdata (name, email, message) VALUES (?, ?, ?)",
		[name, email, message],
		function (err) {
			if (err) {
				return res.status(500).send("Failed to save data.");
			}
			res.status(200).send("Data saved successfully!");
		}
	);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
