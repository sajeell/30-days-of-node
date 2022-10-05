const http = require('http')

const host = "127.0.0.1"
const port = 5002

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World!");
    res.end();
})

server.listen(port, host, (error) => {
    if (error) return console.error(error)

    console.log(`Server is listening on ${host}:${port}`)
})