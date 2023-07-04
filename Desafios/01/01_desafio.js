// Curso: Programación Backend
// Comisión: 43395 
// Tipo de entrega: Desafio N°1
// Alumno: Leandro Vildoza

// Intrucciones del desafio en los comentarios:


// Definir la class ProductManager

class ProductManager{
    #precioBaseGanancia = 0.15;

    constructor (){
        // Definimos el constructor que se llama "products", que va
        // a tener un arreglo vacio, para que el listado de productos aparezca como vacío
        this.products = [];
    }

    // Debe contar con un método que retorne nuestro arreglo de productos.

    getProducts = () =>{
        return this.products;
    }

    // Para poder almacenar los productos en nuestro arreglo, debemos pasarle ciertos parámetros.

    addProduct = (title, description, price, thumbnail, code, stock) => {
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                products: [] // nos pedía el elemento "products" con array vacío
            };

            if (this.products.length === 0){
            product.id = 1;
            }
            else{
            product.id = this.products [this.products.length-1].id+1
            }

            // insertamos un producto
            this.products.push(product);
        }

        //Debe contar con el evento getProductById, el cual recibe como parámetro el
        //id del producto

        getProductById = (idProduct) => {
            const productIndex = this.products.findIndex(product => product.id === idProduct);
            //findIndex retorna la posición dentro del arreglo
            //almacena el índice donde se encuentra nuestro producto

            if(productIndex === -1){
                console.log("Not found");
                return;
            }
            const productAdd = this.products [productIndex].products.includes(idProduct);

            if (productAdd) {
                console.log ("Product Add Ok!");
                return;
            }
            this.products[productIndex].products.push(idProduct)
        }
};

//Agregar los productos

const manejadorProductos = new ProductManager();
manejadorProductos.addProduct("producto prueba1", "Este es un producto prueba1", 200, "sin imagen", "abc123", 25);
manejadorProductos.addProduct("producto prueba2", "Este es un producto prueba2", 201, "sin imagen1", "abc1234", 251);
manejadorProductos.addProduct("producto prueba3", "Este es un producto prueba3", 202, "sin imagen2", "abc1235", 252);
manejadorProductos.addProduct("producto prueba4", "Este es un producto prueba4", 203, "sin imagen3", "abc1236", 253);

console.log(manejadorProductos.getProducts());


//Realizo una busqueda por ID para obtener si el producto existe o no:
manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);
manejadorProductos.getProductById(4);

console.log(manejadorProductos.getProductById(5));