import express, { Express, Request, Response } from 'express';
const productService = require("../services/productsService");

const getAllProducts = (req: Request, res: Response) => {
  // *** ADD ***
  const allProducts = productService.getAllProducts();
  res.send("Get all products");
};

const getOneProduct = (req: Request, res: Response) => {
  // *** ADD ***
  const product = productService.getOneProduct();
  res.send("Get an existing product");
};

const createNewProduct = (req: Request, res: Response) => {
  // *** ADD ***
  const createdProduct = productService.createNewProduct();
  res.send("Create a new product");
};

const updateOneProduct = (req: Request, res: Response) => {
  // *** ADD ***
  const updatedProduct = productService.updateOneProduct();
  res.send("Update an existing product");
};

const deleteOneProduct = (req: Request, res: Response) => {
  // *** ADD ***
  productService.deleteOneProduct();
  res.send("Delete an existing product");
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};