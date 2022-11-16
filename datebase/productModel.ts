import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IProduct {
  id: string;
  name: string;
  price: number;
  updatedAt: Date;
}

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true, min: 0, max: 100},
  price: { type: Number, required: true},
  updatedAt: { type: Date, required: true, default: () => new Date()}
});


module.exports = model("Product", productSchema);