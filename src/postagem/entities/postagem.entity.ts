import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagem"})
export class Postagem{

    @PrimaryGeneratedColumn() //indica que id é chave primária
    id: number;

    @IsNotEmpty() //não deixa espaço vazio e também nulos
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty() //não deixa espaço vazio e também nulos
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() //registra data e hora
    data: Date;

}