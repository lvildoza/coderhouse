class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
};


class ProductManager{
    #products;
    #productDirPath;
    #productFilePath;
    #fileSystem;

    constructor() {
        this.#products = new Array();
        this.#productDirPath = ".files";
        this.#productFilePath = this.#productDirPath + "/Products.json";
        this.#fileSystem = require("fs");
    }


    
    // METODOS con persistencia en archivo.json
    // Crear producto
    createProduct = async(title, description, price, thumbnail, code, stock) => {
        let newProduct = new Product(title, description, price, thumbnail, code, stock);
        console.log("Crear producto: producto a registrar");
        console.log(newProduct);

        try {
            // Creamos el directorio
            await this.#fileSystem.promises.mkdir(this.#productDirPath, { recursive: true });

            // Validamos que exista ya el archivo con productos sino se crea vacío para ingresar nuevos:
            if (!this.#fileSystem.existsSync(this.#productFilePath)) {
                // Se crea el archivo vacío
                await this.#fileSystem.promises.writeFile(this.#productFilePath, "[]");
            }

            // leemos el archivo
            let productsFile = await this.#fileSystem.promises.readFile(this.#productFilePath, "utf-8"); // []

            // Cargamos los productos encontrados para agregar el nuevo:
            // obtenemos el JSON String
            console.info("Archivo JSON obtenido desde archivo: ");
            console.log(productsFile);
            this.#products = JSON.parse(productsFile);

            console.log("Productos encontrados: ");
            console.log(this.#products);
            this.#products.push(newProduct);
            console.log("Lista actualizada de productos: ");
            console.log(this.#products);

            // Se sobrescribe el archivo de productos para persistencia.
            await this.#fileSystem.promises.writeFile(this.#productFilePath, JSON.stringify(this.#products, null, 2,'\t'));
        } catch (error) {
            console.error(`Error creando producto nuevo: ${JSON.stringify(newProduct)}, detalle del error: ${error}`);
            throw Error(`Error creando producto nuevo: ${JSON.stringify(newProduct)}, detalle del error: ${error}`);
        }
    }


    // Leer productos
    productList = async () => {
        return "En construcción"
    }
}

module.exports = ProductManager;