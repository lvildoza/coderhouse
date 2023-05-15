import {promises as fs} from "fs"

class ProductManager {
    constructor(){
        const path = './products.json'
    }

    static id = 0

    addProduct = async () => {

        await fs.promises.writeFile(path, JSON.stringify("Hola como estas", null, '\t'))
    }
}

const products = new ProductManager

products.addProduct()