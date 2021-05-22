require('dotenv').config();

const config = {
      dev: process.env.NODE_ENV != 'production',
      port: process.env.PORT || 3000,
      AtlasUser: process.env.ATLAS_USER,
      AtlasPasword: process.env.ATLAS_PASSWORD,
      AtlasDBName: process.env.ATLAS_DB_NAME,
      mysqlHost: process.env.MYSQL_HOST,
      mysqlUser: process.env.MYSQL_USER,
      mysqlPassword: process.env.MYSQL_PASSWORD,
      mysqlDataBase: process.env.MYSQL_DATABASE
}

module.exports = { config }