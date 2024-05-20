const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("formdata.db");

db.serialize(() => {
	db.run(
		"CREATE TABLE IF NOT EXISTS formdata (name TEXT, email TEXT, message TEXT)"
	);
});

module.exports = db;
