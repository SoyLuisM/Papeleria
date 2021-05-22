const { nanoid } = require("nanoid")

const TABLE = "products"

module.exports = function (store){
      
      async function list(){
            const result = await store.listAll(TABLE,null);
            return result;
      } 
      return {
            list,
      }
}