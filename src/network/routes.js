const products = require('../api/products/network')

const routes = (server) => {
      server.use('/api/products',products)
}

module.exports = routes