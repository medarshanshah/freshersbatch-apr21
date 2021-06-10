var http = require('http')

const port = 3000
const hostname = 'localhost'

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'} );
    res.end("Hello Everyone");
})

server.listen(port, hostname, () => {
    console.log(`Success, I'm listening to port: ${port}`)
})