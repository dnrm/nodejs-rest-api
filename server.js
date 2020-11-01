const http = require('http') 
const products = require('./products')

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({"message": "Route not found"}));
    }
})

const PORT = process.env.PORT || 6969;


server.listen(PORT, () => console.log(`Server listening in port http://localhost:${PORT}`))

module.exports = server;