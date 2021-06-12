const { nanoid } = require("nanoid")
const TABLE = "empleado"

module.exports = function (store){
      async function list(){
            //en este caso no defini nigun query :v
            const result = await store.listAll(TABLE);
            return result;
      } 

      async function insertVendor(data,id){
            let result

            data.id = nanoid();
            console.log(data)//esto es solo para ver que se guarde bien el id
            result = await store.create(TABLE, data);
            
            return result;
      }
      return {
            list,
            insertVendor
      }
}