import"reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/product";

export const AppDataSource =  new DataSource ({
    type: "sqlite",
    database: "databasee.sqlite",
    synchronize: true,
    logging: false,
    entities: [Product],
    migrations:[],
    subscribers: []

});
