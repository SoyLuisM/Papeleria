# Papeleria
Proyecto para la materia de sistemas distribuidos impartido en la UPIITA

### Instalacion
```
npm install
```

### Ejecución en produccion
para desplegar cree el archivo ".env" y copie los datos del archivo ".env_example",
llene los datos con los y ejecute alguno de los siguientes comandos

### Ejecución en desarrollo
```
npm run dev
```

### Ejecución en produccion
```
npm run prod
```

### CRUD de productos
- [X] GET `/api/products/` Endpoint para retornar la lista de productos.
- [X] POST `/api/products/` Endpoint para crear un producto.
- [x] PATCH `/api/poducts/:id` Modificar las caracteristicas de un producto 
- [x] GET `/api/products/:id` buscar un producto 

### CRUD de vendedores
- [x] GET `/api/vendor/` Endpoint para retornar la lista de vendedores.
- [x] POST `/api/vendor/` Endpoint para dar de alta a un vendedor.
- [x] PATCH `/api/vendor/:id` modificar a un empleado
- [x] GET `/api/vendor/id` buscar un vendedor

### CRUD de categorias
- [x] GET `/api/categories/` Endpoint para retornar la lista de categorias.
- [x] POST `/api/categories/` Endpoint para crear una categoria
- [x] PATCH `/api/categories/:id` modificar los detallles de una categoria
- [x] GET `/api/categories/id` buscar una categoria

### CRUD de proveedores
- [x] GET `/api/prov/` Endpoint para retornar la lista de proveedores.
- [x] POST `/api/prov/` Endpoint para dar de alta a un proveedor
- [x] PATCH `/api/prov/:id` modificar los detallles de un proveedor
- [x] GET `/api/prov/id` buscar un proveedor

### CRUD de pedidos
- [ ] GET `/api/order/` Endpoint para retornar la lista de pedidos.
- [ ] POST `/api/order/` Endpoint para crear un pedido
- [ ] PATCH `/api/order/:id` modificar los detallles de un pedido
- [ ] GET `/api/order/id` buscar un pedido

### CRUD de usuarios
- [x] GET `/api/user/` Endpoint para retornar la lista usuarios.
- [x] POST `/api/user/` Endpoint para crear un usuario
- [x] PATCH `/api/user/:id` modificar los detallles de un usuario
- [x] GET `/api/user/id` buscar un usuario

### CRUD de puestos
- [x] GET `/api/job/` Endpoint para retornar la lista de puestos.
- [x] POST `/api/job/` Endpoint para crear un puesto
- [x] PATCH `/api/job/:id` modificar los detallles de un puesto
- [x] GET `/api/job/id` buscar un puesto

### CRUD de ventas
- [ ] GET `/api/sale/` Endpoint para retornar la lista de compras hechas
- [ ] POST `/api/sale/` Endpoint para realiza una venta/compra
- [ ] PATCH `/api/sale/:id` modificar los detallles de una venta/compra
- [ ] GET `/api/sale/id` buscar una venta