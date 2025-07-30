import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

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

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: 'tema_id' })
    tema: Tema

}