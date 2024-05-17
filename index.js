const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

// Creates simple Express app
const app = express();

// Port number defining
const PORT = process.env.PORT || 5000;

// Define routes and static files like css, js, html files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Define SQLite database
const dbPath = path.join(__dirname, "data", "form_data.db");
const db = new sqlite3.Database(dbPath);

// Create table if not exists
db.serialize(() => {
	db.run(
		"CREATE TABLE IF NOT EXISTS FormData (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, message TEXT)"
	);
});

// Define route to handle form submission
app.post("/submit-form", (req, res) => {
	const { Name, Email, Message } = req.body;

	// Insert form data into SQLite database
	db.run(
		"INSERT INTO FormData (name, email, message) VALUES (?, ?, ?)",
		[Name, Email, Message],
		(err) => {
			if (err) {
				console.error("Error inserting data:", err);
				res.status(500).send("Error inserting data into database");
			} else {
				res.send("Form data submitted successfully!");
			}
		}
	);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
