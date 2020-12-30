/**
 * For Typegraphql & Typegoose Exmaples
 * https://github.com/MichalLytek/type-graphql/tree/master/examples
 *
 * For Redis GUI use
 * redis-commander - https://www.npmjs.com/package/redis-commander
 */

/**
* Imported `newrelic` for server monitoring.
*/
require('newrelic');

import startServer from './app';
new startServer();
