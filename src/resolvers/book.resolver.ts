import "reflect-metadata";
import {Query, Resolver} from "type-graphql";
import Book from "../entity/Book";
import {getRepository} from "typeorm";

@Resolver()
export default class BookResolver {
    books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1'
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2'
        },
    ];
    bookRepository = getRepository(Book);
    @Query(returns => [Book!])
    getBooks () {
        return this.bookRepository.find()
    }

}
