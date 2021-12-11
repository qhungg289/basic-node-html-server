const express = require("express");
const app = express();

const port = process.env.port || 8000;

const options = { root: "public" };

app.get("/", (req, res) => {
	res.sendFile("index.html", options, (err) => {
		if (err) {
			next(err);
		} else {
			console.log("Sent: index.html");
		}
	});
});

app.get("/about", (req, res) => {
	res.sendFile("about.html", options, (err) => {
		if (err) {
			next(err);
		} else {
			console.log("Sent: about.html");
		}
	});
});

app.get("/contact", (req, res) => {
	res.sendFile("contact-me.html", options, (err) => {
		if (err) {
			next(err);
		} else {
			console.log("Sent: contact-me.html");
		}
	});
});

app.get("*", (req, res) => {
	res.status(404);
	res.sendFile("404.html", options, (err) => {
		if (err) {
			next(err);
		} else {
			console.log("Sent: 404.html");
		}
	});
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
