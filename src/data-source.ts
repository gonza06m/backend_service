import"reflect-metadata";
import { DataSource } from "typeorm";
import { product } from "./entities/product";
import { subscribe } from "diagnostics_channel";

export const AppDataSource =  new DataSource ({
    type: "sqlite",
    database: "databasee.sqlite",
    synchronize: true,
    logging: false,
    entities: [product],
    migrations:[],
    subscribers: []

});
