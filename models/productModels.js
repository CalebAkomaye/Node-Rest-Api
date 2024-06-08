const data = require('..products.json')

const find = () => {
    return new Promise((resovle, reject) => {
        resolve(data)
    })
}

module.exports = {find}