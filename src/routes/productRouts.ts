import { Router } from "express";
import { getAllProducts, getProductsByID, createproduct, updateproduct, deleteproduct } from "../controllers/productcontrollers";
import { Product } from "../entities/product";

const productRouters = Router();

productRouters.get("productRouters/",  getAllProducts);
productRouters.get("productRouters/:id", getProductsByID);
productRouters.post("productRouters/", createproduct);
productRouters.put("productRouters/:id",updateproduct);
productRouters.delete("productRouters/:id", deleteproduct);
 
export default productRouters;

