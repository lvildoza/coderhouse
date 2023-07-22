import express from "express";
import productRouter from "./router/product.routes.js";
import cartRouter from "./router/carts.routes.js";

const app = express()
const PORT = 8080

app.use(express.json()); //Me permite leer json en las peticiones
app.use(express.urlencoded({ extended: true })); //Objetos codificados desde URL

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter)

app.listen(PORT, () => {
    console.log(`servidor Express Puerto ${PORT}`);
});