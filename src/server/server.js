const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // İstek URL kontrolü yapılır, sadece /swagger.json istekleri kabul edilir
  if (req.url === '/swagger.json') {
    const filePath = path.join(__dirname, 'src', 'jsons', 'swagger.json');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Swagger JSON is running on http://localhost:${PORT}/swagger.json`);
});
