const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 5005

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/pdf' })

    fs.readFile('pdf.pdf', (error, data) => {
        if (error) res.json({ status: 'error' })
        else {
            res.write(data)
            res.end()
        }
    })
}).listen(port, host, (error) => {
    if (error) return console.error(error);

    console.log(`Server is listening at http://${host}:${port}`)
})