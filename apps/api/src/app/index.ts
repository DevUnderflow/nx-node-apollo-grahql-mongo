import "reflect-metadata";
import intializeServer from './loaders';
import express, { Express } from 'express';
import { seedDatabase } from './loaders/seedDB';
import { environment } from "../environments/environment";

/**
 * Entry Point for the server
 */
class StartServer {
  #appModule :Express;

  constructor() {
    this.#appModule = express();

    new Promise((resolve) => {
      resolve(intializeServer({ app: this.#appModule}));
    }).then(() => {
      this.#appModule.listen({ port: environment.port }, () =>
        console.log(`🚀 Server ready at http://localhost:${environment.port}`)
      );
      setTimeout(() => {
        this.AskUserConsentForDBSeed();
      }, 500)
      return true;
    }).catch((e) => {
      console.log(e);
    })
  }

  private AskUserConsentForDBSeed() {
    const askUserToSeedDB = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    askUserToSeedDB.question('\n\x1b[36mSeed DB with admin user?\x1b[0m \x1b[32m Yes \x1b[0m or \x1b[31m No (Enter) \x1b[0m\n', async response => {
      if (response.toLowerCase().trim() === 'yes' || response.toLowerCase().trim() === 'y') {
        const seederResponse = await seedDatabase();
        console.log('\x1b[32m%s\x1b[0m',seederResponse ? 'Seeded' : false);
      } else { console.info('\x1b[31m%s\x1b[0m','Seed Skipped!')}
      askUserToSeedDB.close();
    });
  }
}

export default StartServer;
