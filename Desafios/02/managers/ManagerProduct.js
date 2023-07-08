import fs from 'fs';

const path = './files/products.json';

export default class ProductManager{
    addProduct = async (product) =>{
        const products = await this.getProducts();

        if(products.length === 0){
            product.id = 1;
        }else{
            product.id = products[products.length-1].id+1
        }
        products.push(product);
        await fs.promises.writeFile(path, JSON.stringify(products, null, '\t'))
        return products;
    }
    
    getProducts = async () =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const products = JSON.parse(data);
            return products
        }else{
            return[]
        }
    }

    getProductById = async (id) =>{
        const products = await this.getProducts();
        if(!products.find(product => product.id === id)){
            console.log("Producto no encontrado")
        } else {
            console.log(products.find(product => product.id === id))
        }
    }

    updateProduct = async ({id, ...product}) =>{
        await this.deleteProduct(id);
        let productOld = await this.getProducts();
        let productNew = [{ ...product, id}, ...productOld];        
        await fs.promises.writeFile(path, JSON.stringify(productNew, null, '\t' ))
        console.log("Producto actualizado")

    }

    deleteProduct = async (id) =>{
        const products = await this.getProducts();
        const productFilter = products.filter(products => products.id != id)
        await fs.promises.writeFile(path, JSON.stringify(productFilter, null, '\t' ))
    }
};
