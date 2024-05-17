const express = require("express");
const path = require("path");

// Creates simple Express app
const app = express();

// Port number defining
const PORT = process.env.PORT || 5000;

// Define routes and static files like css, js, html files
app.use(express.static(path.join(__dirname, "public")));

// Defining routes for different pages
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
