const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit-form", (req, res) => {
	const { name, email, message } = req.body;
	db.run(
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
