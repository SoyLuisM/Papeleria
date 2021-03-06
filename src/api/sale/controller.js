const { nanoid } = require("nanoid")
const TABLE = "ventas"
const TABLE2 = "producto_venta"

module.exports = function (store){

    async function list(){
        const result = await store.listAll(TABLE);
        return result;
    } 

    async function sale(id_empleado,list_products){
        //se debe calcular el total y subtotal a aprtir de la lista de productos
        let data_venta = {
            id : nanoid(),
            fecha: new Date(),
            sub_total: 100,
            total: 115,
            id_vendedor: id_empleado
        }
        let data_list_venta = {}
        for (let i in list_products){
            data_list_venta = {
                id: nanoid(), 
                id_producto: list_products[i], 
                id_venta: data_venta.id
            }
            await store.create(TABLE2, data_list_venta);
        }
        
        let result = await store.create(TABLE, data_venta);

        return result;
    }

    async function listOne(id){
            
        let result = await store.listOne(TABLE, id)
        return result
    }

    return {
        list,
        sale,
        listOne
  }
}