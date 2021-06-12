const { nanoid } = require("nanoid")

const TABLE = "catalogo_categorias"

module.exports = function (store){

      async function list(){
            //el null que se envia se puede sustituir por un query para filtar los resultados
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