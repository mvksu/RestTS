const Product = require("../datebase/productModel");


const getAllProducts = () => {
  try {
    const products = Product.find({})
    return products
  } catch (error) {
    console.log(error)
  }
};

const getOneProduct = (id: string) => {
  try {
    const product = Product.find({ _id: id})
    return product
  } catch (error) {
    console.log(error)
  }
};

const createNewProduct = (newProduct: any) => {
  try {
    const product = Product.insertMany({
      ...newProduct
    })
    return product;
  } catch (error) {
    console.log(error)
  }
};

const updateOneProduct = (updatedProductValues: any) => {
  try {
    const product = Product.findOneAndUpdate({ _id: updatedProductValues._id}, { ...updatedProductValues, updatedAt: new Date() })
    return product;
  } catch (error) {
    console.log(error)
  }
};

const deleteOneProduct = async (id: string) => {
  try {
    const product = Product.deleteMany({_id: id})
    return product;
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};