/*
 * @Author: Yoakec
 * @Date: 2022-06-17 14:21:47
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-17 14:21:59
 * @FilePath: \node_ts\src\entity\Rhtm.ts
 * @Description: 
 */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Rhtm {
    @PrimaryColumn()
    did!: string
    @Column()
    rh!: number
    @Column()
    tem!: number
    @Column()
    lstime!: string
    @Column()
    box_num!: string
    @Column()
    username!: string
    @Column()
    userid!: string

}