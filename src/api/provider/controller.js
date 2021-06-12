const { nanoid } = require("nanoid")
const TABLE = "catalogo_provedores"

module.exports = function (store){
      async function list(){
            //en este caso no defini nigun query :v
            const result = await store.listAll(TABLE);
            return result;
      } 

      async function insertProvider(data,id){
            let result

            data.id = nanoid();
            console.log(data)//esto es solo para ver que se guarde bien el id
            result = await store.create(TABLE, data);
            
            return result;
      }

      async function update(id, data){
            result = await store.update(TABLE, data, id)
            return result
      }

      async function listOne(id){
            
            result = await store.listOne(TABLE, id)
            return result
      }

      return {
            list,
            insertProvider,
            update,
            listOne,
      }
}