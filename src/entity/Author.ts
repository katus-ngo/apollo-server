import {Field, ObjectType, ID} from 'type-graphql';
import {Entity, PrimaryGeneratedColumn, Column, TreeChildren} from "typeorm";
import Book from "./Book";

@ObjectType()
@Entity()
export default class Author {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: Number;

    @Field()
    @Column()
    name: String;

    @Field(type => [Book!])
    @TreeChildren()
    books: Book[]

}
