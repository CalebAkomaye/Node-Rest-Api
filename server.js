const http = require('http')
const PORT = process.env.PORT || 3000
const {getProducts} = require('./controllers/productControllers')

http.createServer((req, res) => {
   if(req.url === '/api/products' && req.method === 'GET'){
    getProducts(req, res)
   }else{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Unsupported Route'}))
   }

}).listen(PORT, () => console.log(`server running on port ${PORT}`))