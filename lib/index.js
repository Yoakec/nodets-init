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
const data_source_1 = require("./data-source");
const Post_1 = require("./entity/Post");
/*
 * @Author: Yoakec
 * @Date: 2022-05-20 19:52:09
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-17 14:44:18
 * @FilePath: \node_ts\src\index.ts
 * @Description:
 */
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize();
        const rhtmRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
        const rhtm = yield rhtmRepository.find();
        console.log(rhtm);
    });
}
getData();
//# sourceMappingURL=index.js.map