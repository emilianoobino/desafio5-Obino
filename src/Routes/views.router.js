const express = require("express");
const router = express.Router(); 
const ProductManager = require("../Controllers/product-manager.js");

// Crear una instancia de ProductManager
const productManager = new ProductManager();

router.get("/home", async (req, res) => {
    try {
        const productos = await productManager.getProducts();
        res.render("home", {productos: productos});
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor"})
    }
})

router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
})

router.get("/chat", async (req, res) => {
    res.render("chat");
})

module.exports = router;

