const data = require('..products.json')

const find = () => {
    return new Promise((resovle, reject) => {
        resolve(data)
    })
}

const findById = (id) => {
    return new Promise((resovle, reject) => {
        const item = data.find(item => item.id === id)
        resovle(item)
    })
}

module.exports = {find, findById}