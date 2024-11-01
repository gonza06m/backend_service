import"reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const AppDataSource =  new DataSource ({
    type: "sqlite",
    database: "databasee.sqlite",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations:[],
    subscribers: []

});
