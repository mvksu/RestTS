import { Request, Response } from 'express';
const productService = require("../services/productsService");

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productService.getAllProducts();
  res.send({ status: "OK", data: allProducts });
};

const getOneProduct = async (req: Request, res: Response) => {
  const { ProductId } = req.params;
  const product = await productService.getOneProduct(ProductId);
  res.status(201).send({ status: "OK", data: product });
};

const createNewProduct = async (req: Request, res: Response) => {
  const { body } = req;

  if (!body.name || body.name.length > 100 || !body.price) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body or is invalid",
        },
      });
    return;
  }

  const newProduct = {
    name: body.name,
    price: body.price,
  };
  const createdProduct = await productService.createNewProduct(newProduct);
  console.log("scont", createdProduct)
  res.status(201).send({ status: "OK", data: createdProduct });
};

const updateOneProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const updatedProductId = body.id || req.params.ProductId

  if (!updatedProductId || !body.name || body.name.length > 100) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body",
        },
      });
    return;
  }

  const updatedProductValues = {
    _id: updatedProductId,
    ...body
  }

  const updatedProduct = await productService.updateOneProduct(updatedProductValues);
  res.status(201).send({ status: "OK", data: updatedProduct });
};

const deleteOneProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const deletedProductId: string = body.id || req.params.ProductId

  await productService.deleteOneProduct(deletedProductId);
  res.send("Delete an existing product");
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};