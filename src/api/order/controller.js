const { nanoid } = require("nanoid")
const TABLE = "pedido"
const TABLE2 = "producto_pedido"

module.exports = function (store){

    async function list(){
        const result = await store.listAll(TABLE);
        return result;
    } 

    async function buy(id_prov,list_products){
        //se debe calcular el total y subtotal a aprtir de la lista de productos
        let data_pedido = {
            id : nanoid(),
            fecha: new Date(),
            total: 115,
            id_provedor: id_prov
        }
        let data_list_pedido = {}

        for (let i in list_products){
            data_list_pedido = {
                id: nanoid(), 
                id_producto: list_products[i], 
                id_pedido: data_pedido.id
            }
            await store.create(TABLE2, data_list_pedido);
        }
        
        let result = await store.create(TABLE, data_pedido);

        return result;
    }

    async function listOne(id){
            
        result = await store.listOne(TABLE, id)
        return result
    }

    return {
        list,
        buy,
        listOne
  }
}