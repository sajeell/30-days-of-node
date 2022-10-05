const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 5004

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })

    const jsonResponse = {
        status: 200,
        message: 'Success',
        result: ['sunday', 'monday'],
        code: 2000
    }

    console.log('Server Running')
    res.end(JSON.stringify(jsonResponse))
}).listen(port, host, (error) => {
    if (error) return console.error(error)

    console.log(`Server is started on ${host}:${port}`);
})

