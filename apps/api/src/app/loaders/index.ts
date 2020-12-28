import { intializeApolloGraphQl } from './apollo.loader';
// import { intializeRedisServer } from './redis.loader';
import { intializeMongoose } from './mongoose.loader';
import dependencyInjectorLoader from './dependencyInjector';
import { Container } from 'typedi';
import mongoose from 'mongoose';
import { userModel } from '../entity';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { environment } from '../../environments/environment';

/**
 * Configure server props
 * @param app: Express Instance
 */
const intializeServer = async ({app}) => {

  /**
   * Enable CORS midlleware in production.
   */
  if (environment.__pord__) {
    app.use(cors({
      origin: 'YOUR_CLIENT_URL', //change with your own client URL
      credentials: true
    }))
  } else {
    app.use(cors());
  }
  app.use(cookieParser())

  /**
   * Intialize Redis Server and flush data at start.
   */
  // const redis = await intializeRedisServer();
  // await redis.flushall();

  /**
   * Intialize Mongoose Instance.
   */
  await intializeMongoose();

  /**
   * Intialize Dependency Injection
   */
  await dependencyInjectorLoader({
    Container,
    entities: [userModel]
  });

  /**
   * Intialize Apollo GrapQL Server.
   */
  const apolloServer = await intializeApolloGraphQl({Container });
  apolloServer.applyMiddleware({ app });

  /**
   * Set Mongoose trace to true in production.
   */
  if (!environment.__pord__) {
    mongoose.set('debug', true);
  }
}

export default intializeServer;
