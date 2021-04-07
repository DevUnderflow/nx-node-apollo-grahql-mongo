<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="./logo.png" alt="Nx" width="380" height="100">
  </a>

  <h3 align="center">Nx-Nodejs-Apollo/GraphQL/Express/MongoDB Boilerplate</h3>
  <p align="center">
    Try out GraphQL IDE live at <a href="https://node-graphql-mongo.herokuapp.com/graphql">https://node-graphql-mongo.herokuapp.com/graphql</a>  
    <br />
    This project was generated using <a href="https://nx.dev">Nx</a>.
    <br />
    <br />
    <a href="https://github.com/smithg09/nx-node-apollo-grahql-mongo/issues/new?assignees=&labels=&template=bug_report.md&title=">🐞 Bug Report</a> &nbsp;&nbsp;
    <a href="https://github.com/smithg09/nx-node-apollo-grahql-mongo/issues/new?assignees=&labels=&template=feature_request.md&title=">📢 Feature Request</a>
    <br />
  </p>
<p align="center">
<a href="https://github.com/smithg09/nx-node-apollo-grahql-mongo/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
</a>
<a href="https://github.com/smithg09/nx-node-apollo-grahql-mongo/issues">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions welcome">
</a>
<a href="#">
    <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source">
</a>
</p>
</p>

## Tech Stack

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

* [Node.js](https://nodejs.org/en/), [Apollo](https://www.apollographql.com/), [TypeScript](https://www.typescriptlang.org/) , [Nx](https://nx.dev),  [Prettier](https://prettier.io/)— core platforms.
* [Typegraphql](https://typegraphql.com/) - Typescript Wrapper for Apollo GraphQL. 
* [MongoDB](https://www.mongodb.com/) , [typegoose](https://typegoose.github.io/typegoose/) — data access and db automation.
* [Jest](https://jestjs.io/) - unit and snapshot testing.

## Folder Structure For Node GraphQL API 
```bash
apps/api/
├── src
│   ├── app
│   │   ├── entity
│   │   │   ├── index.ts
│   │   │   └── user.ts
│   │   ├── index.ts
│   │   ├── loaders
│   │   │   ├── apollo.loader.ts
│   │   │   ├── dependencyInjector.ts
│   │   │   ├── index.ts
│   │   │   ├── mongoose.loader.ts
│   │   │   ├── redis.loader.ts
│   │   │   └── seedDB.ts
│   │   ├── middlewares
│   │   │   ├── isAuthenticated.ts
│   │   │   └── typegoose.middleware.ts
│   │   ├── modules
│   │   │   ├── User
│   │   │   │   └── user.resolver.ts
│   │   │   ├── index.ts
│   │   │   └── shared
│   │   └── services
│   │       └── user.service.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   └── main.ts
├── jest.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Development

We use `node` version `10.15.0`

```
nvm install 10.15.0
```

```
nvm use 10.15.0
```

The first time, you will need to run

```
npm install
```

Run `nx serve` for a dev server. Navigate to http://localhost:4000/graphql. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Developer 
| [![image](https://avatars3.githubusercontent.com/u/41014321?s=128&v=4)](https://smithgajjar.tech) |
|:-:|
| [![LinkedIn](https://icons.iconarchive.com/icons/danleech/simple/32/linkedin-icon.png)](https://www.linkedin.com/in/smith-gajjar-5a27716b/) [![Portfolio](https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/32/Browser-icon.png)](https://smithgajjar.me) |

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
