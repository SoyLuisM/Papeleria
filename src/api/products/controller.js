const { nanoid } = require("nanoid")

const TABLE = "products"

module.exports = function (store){

      async function list(){
            const result = await store.listAll(TABLE,null);
            return result;
      } 

      async function insertProduct(data,id){
            let result

            data._id = nanoid();
            result = await store.create(TABLE, data);
            
            return result;
      }

      return {
            list,
            insertProduct
      }
}