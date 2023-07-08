// IMPORTANTE: Descomentar las acciones que debe testear.

import ProductManager from './managers/ManagerProduct.js';

const managers = new ProductManager();

/*
// VER TODOS LOS PRODUCTOS DEL ARRAY

let products = await managers.getProducts()
console.log(products);


// BUSQUEDA POR ID

managers.getProductById(15);


// AGREGAR UN PRODUCTO AL ARRAY

const env = async () =>{

    let product = {
        title: 'Calculadora',
        description: 'cientifica',
        price: 6540,
        thumbnail: 'ruta de la imagen',
        code: '1111',
        stock: 5
    };

    let result = await managers.addProduct(product);

    result = await managers.getProducts()
    
    console.log(result);


}

env()

*/

// ACTUALIZAR UN PRODUCTO

managers.updateProduct(	{
    "title": "Calculadora",
    "description": "cientifica",
    "price": 10,
    "thumbnail": "ruta de la imagen",
    "code": "1111",
    "stock": 5,
    "id": 3
});

/*
// ELIMINAR UN PRODUCTO

managers.deleteProduct(2);
*/
