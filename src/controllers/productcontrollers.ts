import { request, response } from "express";
import { AppDataSource }  from "../data-source";
import { product } from "../entities/product";

//traemos la tabala o entidad producto de la base de datos
const productRepository = AppDataSource.getRepository(product);

// obtener todos los productos
export const getAllProducts = async (req: request, res: response) => {
    try{
        const products =  await productRepository.find();
        res.json(products);
    } catch(error) {
        res.status(500) .json({
            message: "Error al obtener los productos."
        });
    }  
};

// obtener un productos
export const getProductsByID = async (req: request, res: response) => {
    try{
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        if (product) {
           res.json(product) 
        } else {
          res.status(404) .json({
            message: "Producto no encontrado"
          });
        }
    } catch(error) {
        res.status(500) .json({
            message: "error al obtener el product"
        })
    }
    
};

// crear un productos
export const createproduct = async (req: request, res: response) => {
    try{

    } catch(error) {

    }
    
};

// actualizar un producto
export const updateproduct = async (req: request, res: response) => {
    try{

    } catch(error) {

    }
    
};

// eliminar un producto
export const deleteproduct = async (req: request, res: response) => {
    try{

    } catch(error) {

    }
    
};