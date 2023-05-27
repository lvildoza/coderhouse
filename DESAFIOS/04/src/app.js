import express from "express";
import __dirname from "./utils.js";
// import productRouter from "./router/product.routes.js";
// import cartRouter from "./router/carts.routes.js";

const app = express()
const PORT = 8080

app.use(express.json()); //Me permite leer json en las peticiones
app.use(express.urlencoded({ extended: true })); //Objetos codificados desde URL
app.use(express.static(`${__dirname}/public`));

// app.use("/api/products", productRouter);
// app.use("/api/cart", cartRouter)

app.listen(PORT, () => {
    console.log(`servidor Express en Puerto ${PORT}`);
});