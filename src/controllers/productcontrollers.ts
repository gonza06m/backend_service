import { Request, Response } from "express";
import { AppDataSource }  from "../data-source";
import { Product } from "../entities/Product";

//traemos la tabala o entidad producto de la base de datos
const productRepository = AppDataSource.getRepository(Product);

// obtener todos los productos (GET)
export const getAllProducts = async (req: Request, res: Response) => {
    try{
        const products =  await productRepository.find();
        res.json(products);
    } catch(error) {
        res.status(500) .json({
            message: "Error al obtener los productos."
        });
    }  
};

// obtener un producto (GET)
export const getProductsByID = async (req: Request, res: Response) => {
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
            message: "error al obtener el producto"
        })
    }
    
};

// crear un productos (POST)
export const createproduct = async (req: Request, res: Response) => {
    try{
        const {name, description, price} = req.body;
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        await productRepository.save(product);
        res.status(201).json(product);
       } catch(error) {
        res.status(500) .json({
            message: "error al crear el producto"
        })
    }
    
};

// actualizar un producto
export const updateproduct = async (req: Request, res: Response) => {
    try{
        const {name, description, price} = req.body // tomamos los datos del Request
        //buscamos el producto para actualizarlo
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        
        // validamos que el product tenga informacion
        if (product) {
            product.name = name ?? product.name;
            product.description = description ?? product.description;
            product.price = price ?? product.price;
            await productRepository.save(product); // guardamos los cambiios del prody¿ucto
            res.json(product);
        
        } else {
            res.status(404).json({
                message: "no se encontro el producto"
            });
        }
    
      }  catch(error) {
        res.status(500) .json({
            message: "error al actualizar el producto"
        })
    
};

// eliminar un producto
export const deleteproduct = async (req: Request, res: Response) => {
    try{
        //buscamos el producto para eliminarlo
        const product = await productRepository.findOneBy({
            id: parseInt(req.params.id)
        });
        
        // validamos que el product tenga informacion
        if (product) {
            await productRepository.save(product); // borramos el producto
            res.json({
                message: "producto eliminado"
            });
        
        } else {
            res.status(404).json({
                message: "no se encontro el producto"
            });
        }
    } catch(error) {
        res.status(500) .json({
            message: "error al eliminar el producto"
        })
    }
    
};