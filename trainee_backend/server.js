const http = require("http");
const fs = require("fs");
const path = require("path");
const { getContentType } = require("./utils");

const PORT = 3000;
const frontendDir = path.join(__dirname, "..", "trainee_frontend");

const server = http.createServer((req, res) => {
  const requestedPath = req.url === "/" ? "/index.html" : req.url;
  const safePath = path.normalize(requestedPath).replace(/^([.][.][/\\])+/, "");
  const filePath = path.join(frontendDir, safePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - File not found");
      return;
    }

    res.writeHead(200, { "Content-Type": getContentType(filePath) });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
