/*
 * @Author: Yoakec
 * @Date: 2022-06-20 16:33:22
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-20 16:41:07
 * @FilePath: \node_ts\index.ts
 * @Description: 
 */
import {AppDataSource} from './src/data-source';
import {Post} from './src/entity/Post';

async function getData(){
    await AppDataSource.initialize()
    const rhtmRepository = AppDataSource.getRepository(Post);
    const rhtm = await rhtmRepository.find();
    console.log(rhtm);
}
getData()