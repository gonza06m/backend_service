import { Router } from "express";
import { getAllProducts, getProductsByID, createproduct, updateproduct, deleteproduct } from "../controllers/productcontrollers";
import { Product } from "../entities/Product";

const router = Router();

router.get("product/",  getAllProducts);
router.get("product/:id", getProductsByID);
router.post("product/", createproduct);
router.put("product/:id",updateproduct);
router.delete("product/:id", deleteproduct);
 
export default router;

