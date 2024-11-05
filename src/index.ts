import express, {Application} from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import productRouters from "./routes/productRouts";
import swaggerUI from  "swagger-ui-express";
import swaggerSpec from "./swagger/swagger";
import { Server } from "http";

const app: Application = express();
const PORT = process.env.PORT ?? 3000

// Middleware - Guardianes de conexion
app.use(cors());
app.use(express.json());

//Rutas
app.use("/api", productRouters);

// Documentacion
app.use("/appi-docs", swaggerUI.serve, swaggerUI. setup (swaggerSpec));

//Inicializacion de la base de datos y el servidor
AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`servidor corriendo en http://localhost:${PORT}\n`);
            console.log(`Endponints`)
            console.log(`API Products http://localhost:${PORT}/api/products\n`);
            console.log(`Documentacion`)
            console.log(`swagger en http://localhost:${PORT}/api-docs`)
    });
    })
    .catch((error) => console.log(error));
    
