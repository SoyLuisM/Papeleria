const { nanoid } = require("nanoid")

const TABLE = "catalogo_producto"

module.exports = function (store){

      async function list(){
            //el nul que se envia se puede sustituir por un query para filtar los resultados
            const result = await store.listAll(TABLE,null);
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
            return store.listOne(TABLE, id)
      }

      return {
            list,
            insertProduct,
            update,
            listOne,
      }
}