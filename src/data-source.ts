/*
 * @Author: Yoakec
 * @Date: 2022-05-26 10:04:58
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-12 15:53:52
 * @FilePath: \node_ts\src\data-source.ts
 * @Description: 
 */
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/Post"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "tsdemo",
    synchronize: true,
    logging: false,
    // entities: ["src/entity/**/*.ts"],
    entities:  [Post, Category],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"]
  })

  // to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})