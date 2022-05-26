"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entity/Post");
const data_source_1 = require("./data-source");
const Category_1 = require("./entity/Category");
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const category1 = new Category_1.Category();
    category1.name = "TypeScript";
    yield data_source_1.AppDataSource.manager.save(category1);
    const category2 = new Category_1.Category();
    category2.name = "Programming";
    yield data_source_1.AppDataSource.manager.save(category2);
    const post = new Post_1.Post();
    post.title = "TypeScript";
    post.text = `TypeScript is Awesome!`;
    post.categories = [category1, category2];
    yield data_source_1.AppDataSource.manager.save(post);
    console.log("Post has been saved: ", post);
}))
    .catch((error) => console.log("Error: ", error));
//# sourceMappingURL=index.js.map