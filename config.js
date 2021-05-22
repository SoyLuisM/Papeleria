require('dotenv').config();

const config = {
      dev: process.env.NODE_ENV != 'production',
      port: process.env.PORT || 3000,
      AtlasUser: process.env.ATLAS_USER,
      AtlasPasword: process.env.ATLAS_PASSWORD,
      AtlasDBName: process.env.ATLAS_DB_NAME
}

module.exports = { config }