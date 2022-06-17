import { AppDataSource } from "./data-source";
import { Post } from "./entity/Post";
import { Rhtm } from "./entity/Rhtm";

/*
 * @Author: Yoakec
 * @Date: 2022-05-20 19:52:09
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-17 14:44:18
 * @FilePath: \node_ts\src\index.ts
 * @Description: 
 */

async function getData(){
    await AppDataSource.initialize()
    const rhtmRepository = AppDataSource.getRepository(Post);
    const rhtm = await rhtmRepository.find();
    console.log(rhtm);
}
getData()

