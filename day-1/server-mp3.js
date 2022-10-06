const http = require('http');
const fs = require('fs');

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });
    fs.exists('audio.mp3', function (exists) {
      if (exists) {
        const rStream = fs.createReadStream('audio.mp3');
        rStream.pipe(res);
      } else res.end("It's a 404 not found");
    });
  })
  .listen(5006);
