const express = require("express");
const ProductsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", ProductsController.getAllProducts);

router.get("/:ProductId", ProductsController.getOneProduct);

router.post("/", ProductsController.createNewProduct);

router.put("/:ProductId", ProductsController.updateOneProduct);

router.delete("/:ProductId", ProductsController.deleteOneProduct);

module.exports = router;