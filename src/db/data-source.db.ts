import "reflect-metadata";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import Employee from "../entity/employee.entity";
import dotenv from "dotenv";
dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  extra: { max: 5, min: 2 }, //no of connections..opens a connection pool
  entities: ["dist/src/entity/*.js"],
  synchronize: false,
  logging: true, //
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ["dist/src/db/migrations/*.js"],
});

export default dataSource;
