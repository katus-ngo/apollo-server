import "reflect-metadata";
import {createConnection} from "typeorm";
import Author from "./entity/Author";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const author = new Author();
    author.name = "Author 1";
    author.books = [];
    await connection.manager.save(author);

    console.log("Loading users from the database...");
    const authors = await connection.manager.find(Author);
    console.log("Loaded users: ", authors);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
