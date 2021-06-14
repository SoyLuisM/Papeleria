const { nanoid } = require("nanoid")

const TABLE = "productos"

module.exports = function (store){

      async function list(){
            //el nul que se envia se puede sustituir por un query para filtar los resultados
            
            const result = await store.getAll(TABLE,null);
            
            return result;
      } 

      async function insertProduct(data,id){
            let result

            data._id = nanoid();
            result = await store.create(TABLE, data);
            
            return result;
      }

      async function update(id, data){
            let result

            result = await store.update(TABLE,id, data);
            
            return result;
      }

      function listOne(id){
            return store.getOne(TABLE, id)
      }

      return {
            list,
            insertProduct,
            update,
            listOne,
      }
}