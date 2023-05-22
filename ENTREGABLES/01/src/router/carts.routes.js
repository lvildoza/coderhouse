import { Router } from "express";
import cartManager from "../controllers/cartManager.js";

const cartRouter = Router();
const carts = new cartManager;

cartRouter.post("/", async (req, res) => {
    res.send(await carts.addCarts())
});

cartRouter.post("/:cid/products/:pid", async (req, res) => {
    let cartId = req.params.cid
    let productId = req.params.pid
    res.send(await carts.addProductInCart(cartId, productId))
});

cartRouter.get("/", async (req, res) => {
    res.send(await carts.readCarts())
});

cartRouter.get("/:id", async (req, res) => {
    res.send(await carts.getCartsById(req.params.id))
});

export default cartRouter;