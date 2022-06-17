"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
/*
 * @Author: Yoakec
 * @Date: 2022-05-26 10:04:58
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-17 14:33:37
 * @FilePath: \node_ts\src\data-source.ts
 * @Description:
 */
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Post_1 = require("./entity/Post");
const Category_1 = require("./entity/Category");
const Rhtm_1 = require("./entity/Rhtm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "tsdemo",
    synchronize: true,
    logging: false,
    // entities: ["src/entity/**/*.ts"],
    entities: [Post_1.Post, Category_1.Category, Rhtm_1.Rhtm],
});
// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
//# sourceMappingURL=data-source.js.map