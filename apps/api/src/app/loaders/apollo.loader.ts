import { environment } from './../../environments/environment';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from '../modules';
import { authChecker } from '../middlewares/isAuthenticated';
import { TypegooseMiddleware } from '../middlewares/typegoose.middleware';
import { RedisCache } from 'apollo-server-cache-redis';
import 'apollo-cache-control';
/**
 * Configure Apollo Server
 * @param redis
 * @param Container
 */
export const intializeApolloGraphQl = async ({ Container }) => {
  return new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      authChecker,
      globalMiddlewares: [TypegooseMiddleware],
      emitSchemaFile: {
        path: __dirname + "/schema.gql",
        commentDescriptions: true,
        sortedSchema: false,
      },
      container: Container,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
    formatResponse: (response) => {
      return { ...response };
    },
    // cache: new RedisCache({
    //   port: environment.redis_port,
    //   host: environment.redis_host,
    // }),
    cacheControl: {
      defaultMaxAge: 5,
    },
    apollo: {
      key: environment.apollo_key,
      graphVariant: environment.apollo_graph_variant,
    },
    playground: !environment.__pord__,
    tracing: true,
  });
}
