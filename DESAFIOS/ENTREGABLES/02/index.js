import ProductManager from './managers/ManagerProduct.js';

const managers = new ProductManager();

const env = async () =>{

    let product = {
        title: 'Calculadora',
        description: 'cientifica',
        price: 6540,
        thumbnail: 'ruta de la imagen',
        code: '1111',
        stock: 'true'
    };

    let result = await managers.addProduct(product);

    result = await managers.getProducts()
    
    console.log(result);


}

env()
