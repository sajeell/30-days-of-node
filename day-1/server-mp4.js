const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  fs.exists('video.mp4', function (exists) {
    if (exists) {
      const rStream = fs.createReadStream('video.mp4');
      rStream.pipe(res);
    } else res.end("It's a 404 not found");
  });
}).listen(5007)