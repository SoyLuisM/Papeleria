const controller = require('./controller')
const store = require("../../store/mongoAtlas")

module.exports = controller(new store)