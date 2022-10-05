const http = require('http')

const host = '127.0.0.1'
const PORT = 5001

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    console.log("Server Working")
    res.end("Server Working Success")
})

server.listen(PORT, host, (error) => {
    if (error) return console.log('Error occured : ', error)

    console.log(`Server is listening on ${host}:${PORT}`)
})