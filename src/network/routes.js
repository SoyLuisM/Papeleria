const products = require('../api/products/network')
const vendor = require('../api/vendor/network')
const categorie = require('../api/categories/network')

const routes = (server) => {
      server.use('/api/products',products)
      //server.use('/api/vendors',vendor)
      server.use('/api/categories',categorie)
}

module.exports = routes