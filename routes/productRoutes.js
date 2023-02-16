const express = require("express");
const productController = require("../controller/product");



const router = express.Router();


const productRouter = router;


router.post("/add-product", productController.addProduct);

router.get("/all-products", productController.getAllProduct);

router.get("/get-product-by-id/:id", productController.getProductById);

router.put("/edit-a-product/:id", productController.editProduct);

router.delete("/delete-a-product/:id", productController.deleteProduct);


module.exports = productRouter;