const { nanoid } = require("nanoid")

const TABLE = "users"

module.exports = function (store){

      async function list(){
            //el null que se envia se puede sustituir por un query para filtar los resultados
            const result = await store.listAll(TABLE,null);
            return result;
      } 

      async function insertUser(data,id){
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
            insertUser,
            update,
            listOne,
      }
}