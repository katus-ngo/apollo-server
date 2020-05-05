import {Field, ID, ObjectType} from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@ObjectType()
@Entity()
export default class Book {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: Number;

    @Field()
    @Column()
    title: String;

    @Field()
    @Column()
    author: String

}
