const http = require('http')
const data = require('./data/products.json')
const PORT = process.env.PORT || 3000

http.createServer((req, res) => {
   if(req.url === '/api/products' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
   }else{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Unsupported Route'}))
   }

}).listen(PORT, () => console.log(`server running on port ${PORT}`))