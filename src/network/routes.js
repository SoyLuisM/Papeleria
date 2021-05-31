const products = require('../api/products/network')
const vendor = require('../api/vendor/network')

const routes = (server) => {
      server.use('/api/products',products)
      //server.use('/api/vendors',vendor)
}

module.exports = routes