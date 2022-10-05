const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 5003

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })

    fs.readFile('index.html', (err, data) => {
        if (err) throw err;

        console.log('Success');

        res.end(data)
    })
})

server.listen(port, host, (error) => {
    if (error) return console.error(error)

    console.log(`Server is listening at ${host}:${port}`)
})