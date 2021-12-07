const fs = require("fs");
const http = require("http");

const port = process.env.port || 8000;

const server = http.createServer((req, res) => {
	switch (req.url.toLowerCase()) {
		case "/":
			fs.readFile("./public/index.html", (err, data) => {
				if (err) {
					console.error(err);
					return;
				}

				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;

		case "/about":
			fs.readFile("./public/about.html", (err, data) => {
				if (err) {
					console.error(err);
					return;
				}

				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;

		case "/contact":
			fs.readFile("./public/contact-me.html", (err, data) => {
				if (err) {
					console.error(err);
					return;
				}

				res.writeHead(200, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;

		default:
			fs.readFile("./public/404.html", (err, data) => {
				if (err) {
					console.error(err);
					return;
				}

				res.writeHead(404, { "Content-Type": "text/html" });
				res.end(data);
			});
			break;
	}
});

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
