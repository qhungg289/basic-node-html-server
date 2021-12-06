const fs = require("fs");
const http = require("http");

const port = process.env.port || 8080;

const server = http.createServer((req, res) => {
	if (req.url.toLowerCase() === "/") {
		fs.readFile("./public/index.html", (err, data) => {
			if (err) {
				console.error(err);
				return;
			}

			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else if (req.url.toLowerCase() === "/about") {
		fs.readFile("./public/about.html", (err, data) => {
			if (err) {
				console.error(err);
				return;
			}

			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else if (req.url.toLowerCase() === "/contact") {
		fs.readFile("./public/contact-me.html", (err, data) => {
			if (err) {
				console.error(err);
				return;
			}

			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else {
		fs.readFile("./public/404.html", (err, data) => {
			if (err) {
				console.error(err);
				return;
			}

			res.writeHead(404, { "Content-Type": "text/html" });
			res.end(data);
		});
	}
});

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
