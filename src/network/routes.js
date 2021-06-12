const products = require('../api/products/network')
const vendor = require('../api/vendor/network')
const categorie = require('../api/categories/network')
const users = require('../api/users/network')
const jobs = require('../api/jobs/network')
const providers = require('../api/provider/network')

const routes = (server) => {
      server.use('/api/products', products)
      server.use('/api/vendors', vendor)
      server.use('/api/categories', categorie)
      server.use('/api/users', users)
      server.use('/api/jobs', jobs)
      server.use('/api/provider', providers)
}

module.exports = routes