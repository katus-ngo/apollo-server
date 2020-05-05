import "reflect-metadata";
import {Arg, Query, Resolver} from "type-graphql";
import Author from "../entity/Author";

@Resolver()
export default class AuthorResolver {
    authors: Author[] = [
        {
            id: 1,
            name: 'Author 1',
            books: [{
                id: 1,
                title: 'Book 1',
                author: 'Author 1'
            }]
        },
        {
            id: 2,
            name: 'Author 2',
            books: [{
                id: 2,
                title: 'Book 2',
                author: 'Author 2'
            }]
        },
    ];

    @Query(returns => [Author!])
    getAuthors () {
        return this.authors
    }

    @Query(returns => Author!)
    async getAuthorById (@Arg("id") id: Number) {
        return {}
    }
}
