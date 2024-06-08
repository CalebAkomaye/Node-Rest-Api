const Data = require('../models/productModels')

const getProducts = async (req, res) => {
try {
    const data = await Data.find()
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
} catch (error) {
    console.log(error)
}
}

module.exports = {getProducts}