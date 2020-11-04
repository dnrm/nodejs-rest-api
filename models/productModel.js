const products = require('../data/products');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((prod) => prod.id === id)
        resolve(product);
    })
}

function getRoutes() {
    return new Promise((resolve, reject) => {
        const routes = {
            'home': '/',
            'All Products': '/api/products',
            'Get Product By Id': '/api/products/:id',
        };
        resolve(routes);
    })
}

module.exports = {
    findAll,
    findById,
    getRoutes
};