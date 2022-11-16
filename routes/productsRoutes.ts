const express = require("express");
const ProductsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", ProductsController.getAllProducts);

router.get("/:ProductsId", ProductsController.getOneProduct);

router.post("/", ProductsController.createNewProduct);

router.patch("/:ProductsId", ProductsController.updateOneProduct);

router.delete("/:ProductsId", ProductsController.deleteOneProduct);

module.exports = router;