const http = require('http')
const PORT = process.env.PORT || 3000
const {getProducts, getProduct} = require('./controllers/productControllers')

http.createServer((req, res) => {
   if(req.url === '/api/products' && req.method === 'GET'){
    getProducts(req, res)
   }else if(req.url.match(/\/api\/products\/([0-9]+)/)){
      const id = req.url.slice('/')[3]
      getProduct(req, res, id)
   }
   else{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({message: 'Unsupported Route'}))
   }

}).listen(PORT, () => console.log(`server running on port ${PORT}`))