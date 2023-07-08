const ProductManager = require("./ProductManager.js");
let productManager = new ProductManager();
console.log(productManager);

let persistirProduct = async () => {
    let product = await productManager.createProduct('Café', 'Bonafide', 5220, "http://imagen.mate.com.ar", "CA560AR", 1500);
    console.log(product);
}

persistirProduct();