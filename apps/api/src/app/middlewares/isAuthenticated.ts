import { AuthChecker } from "type-graphql";
// import { AuthenticationError } from 'apollo-server-express';
import { Request, Response } from 'express';

/**
 * Authentication Middleware 
 */
export const authChecker: AuthChecker<{ req: Request, res: Response }> = (graphqlPayload) => {
  /**
   *
   *  - Check authentication header for user token
   *  - Example 
   *      if (graphqlPayload.context.req.headers.authentication) {
   *        //verify token from other service like JWT 
   *        if(error) throw new AuthenticationError('Access denied! You need to Login');
   *        return true;
   *      }
   */

  return true;
};
