import {ApolloServer} from "apollo-server";
import {AuthorResolver, BookResolver} from "./resolvers"
import {buildSchema} from "type-graphql";
import {createConnection} from "typeorm";

createConnection()
    .then(() => {
        buildSchema({
            resolvers: [BookResolver, AuthorResolver],
        }).then((schema) => {
            const server = new ApolloServer({
                schema,
                playground: true,
            });
            server.listen(8080).then(({ url }) => {
                console.log(`Server is running, GraphQL Playground available at ${ url }`);
            });
        })
    });



