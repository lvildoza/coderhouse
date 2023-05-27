import { promises as fs } from 'fs';
import { nanoid } from 'nanoid';
import ProductManager from './ProductManager.js';


const productAll = new ProductManager;

class cartManager{
    constructor() {
        this.path = './src/models/carts.json';
    }

// Funciones secundarias
    readCarts = async () => {
        let carts = await fs.readFile(this.path, "utf-8");
        return JSON.parse(carts);
    };

    writeCarts = async (cart) => {
        await fs.writeFile(this.path, JSON.stringify(cart));
    };

    exists = async(id) => {
        let carts = await this.readCarts();
        return carts.find(cart => cart.id === id)
    };

// Funciones para POST, GET, PUT
    addCarts = async () => {
        let cartsOld = await this.readCarts();
        let id = nanoid();
        let cartsConcat = [{id : id, products : []}, ...cartsOld];
        await this.writeCarts(cartsConcat);
        return "Carrito Agregado"
    };

    getCartsById = async (id) => {
        let cartsById = await this.exists(id)
        if(!cartsById) return "Carrito No encontrado"
        return cartsById;
    };

    addProductInCart = async (cartId, productId) => {
        let cartsById = await this.exists(cartId)
        if(!cartsById) return "Carrito No encontrado"
        let productById = await productAll.exists(productId)
        if(!productById) return "Producto No encontrado"

        let cartsAll = await this.readCarts()
        let cartFilter = cartsAll.filter(cart => cart.id != cartId);

        if (cartsById.products.some((prod) => prod.id === productId)){
            let moreProductInCar = cartsById.products.find((prod) => prod.id === productId);
            moreProductInCar.cantidad++;
            console.log(moreProductInCar.cantidad);
            let cartsConcat = [cartsById, ...cartFilter];
            await this.writeCarts(cartsConcat);
            return "Producto Sumado al Carrito";
        }

        cartsById.products.push({id:productById.id, cantidad: 1})

        let cartsConcat = [cartsById, ...cartFilter];
        await this.writeCarts(cartsConcat)
        return "Producto Agregado al Carrito"
    };
}

export default cartManager;



