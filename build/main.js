(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/entity/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/app/entity/index.ts ***!
  \******************************************/
/*! exports provided: userModel, Models, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userModel", function() { return userModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Models", function() { return Models; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./apps/api/src/app/entity/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });


const userModel = { name: 'userModel', model: _user__WEBPACK_IMPORTED_MODULE_0__["UserModel"] };
const Models = { UserModel: _user__WEBPACK_IMPORTED_MODULE_0__["UserModel"] };



/***/ }),

/***/ "./apps/api/src/app/entity/user.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/entity/user.ts ***!
  \*****************************************/
/*! exports provided: User, UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_3__);




let User = class User {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_2__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "_id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_2__["Field"])(),
    Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_2__["Field"])(),
    Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "username", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_2__["Field"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["IsEmail"])(),
    Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["prop"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["prop"])({ type: String }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_2__["Field"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_3__["Length"])(1, 255),
    Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["prop"])({ default: null }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "bio", void 0);
User = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["modelOptions"])({ options: { allowMixed: _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["Severity"].ALLOW } }),
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_2__["ObjectType"])()
], User);

const UserModel = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_1__["getModelForClass"])(User, { schemaOptions: { timestamps: true } });


/***/ }),

/***/ "./apps/api/src/app/index.ts":
/*!***********************************!*\
  !*** ./apps/api/src/app/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders */ "./apps/api/src/app/loaders/index.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loaders_seedDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/seedDB */ "./apps/api/src/app/loaders/seedDB.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./apps/api/src/environments/environment.ts");
var _appModule;






/**
 * Entry Point for the server
 */
class StartServer {
    constructor() {
        _appModule.set(this, void 0);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(this, _appModule, express__WEBPACK_IMPORTED_MODULE_3___default()());
        new Promise((resolve) => {
            resolve(Object(_loaders__WEBPACK_IMPORTED_MODULE_2__["default"])({ app: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _appModule) }));
        }).then(() => {
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _appModule).listen({ port: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].port }, () => console.log(`🚀 Server ready at http://localhost:${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].port}`));
            setTimeout(() => {
                this.AskUserConsentForDBSeed();
            }, 500);
            return true;
        }).catch((e) => {
            console.log(e);
        });
    }
    AskUserConsentForDBSeed() {
        const askUserToSeedDB = __webpack_require__(/*! readline */ "readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
        askUserToSeedDB.question('\n\x1b[36mSeed DB with admin user?\x1b[0m \x1b[32m Yes \x1b[0m or \x1b[31m No (Enter) \x1b[0m\n', (response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.toLowerCase().trim() === 'yes' || response.toLowerCase().trim() === 'y') {
                const seederResponse = yield Object(_loaders_seedDB__WEBPACK_IMPORTED_MODULE_4__["seedDatabase"])();
                console.log('\x1b[32m%s\x1b[0m', seederResponse ? 'Seeded' : false);
            }
            else {
                console.info('\x1b[31m%s\x1b[0m', 'Seed Skipped!');
            }
            askUserToSeedDB.close();
        }));
    }
}
_appModule = new WeakMap();
/* harmony default export */ __webpack_exports__["default"] = (StartServer);


/***/ }),

/***/ "./apps/api/src/app/loaders/apollo.loader.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/loaders/apollo.loader.ts ***!
  \***************************************************/
/*! exports provided: intializeApolloGraphQl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intializeApolloGraphQl", function() { return intializeApolloGraphQl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./apps/api/src/environments/environment.ts");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules */ "./apps/api/src/app/modules/index.ts");
/* harmony import */ var _middlewares_isAuthenticated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middlewares/isAuthenticated */ "./apps/api/src/app/middlewares/isAuthenticated.ts");
/* harmony import */ var _middlewares_typegoose_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/typegoose.middleware */ "./apps/api/src/app/middlewares/typegoose.middleware.ts");
/* harmony import */ var apollo_cache_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-cache-control */ "apollo-cache-control");
/* harmony import */ var apollo_cache_control__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_control__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Configure Apollo Server
 * @param redis
 * @param Container
 */
const intializeApolloGraphQl = ({ Container }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    return new apollo_server_express__WEBPACK_IMPORTED_MODULE_2__["ApolloServer"]({
        schema: yield Object(type_graphql__WEBPACK_IMPORTED_MODULE_3__["buildSchema"])({
            resolvers: [_modules__WEBPACK_IMPORTED_MODULE_4__["UserResolver"]],
            authChecker: _middlewares_isAuthenticated__WEBPACK_IMPORTED_MODULE_5__["authChecker"],
            globalMiddlewares: [_middlewares_typegoose_middleware__WEBPACK_IMPORTED_MODULE_6__["TypegooseMiddleware"]],
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
            return Object.assign({}, response);
        },
        // cache: new RedisCache({
        //   port: environment.redis_port,
        //   host: environment.redis_host,
        // }),
        cacheControl: {
            defaultMaxAge: 5,
        },
        apollo: {
            key: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apollo_key,
            graphVariant: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apollo_graph_variant,
        },
        introspection: true,
        playground: !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].__pord__,
        tracing: true,
    });
});


/***/ }),

/***/ "./apps/api/src/app/loaders/dependencyInjector.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/loaders/dependencyInjector.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Dependency Injector
 *  - Inject all the necessary components like database mondels , any external library instance.
 */
/* harmony default export */ __webpack_exports__["default"] = (({ Container, entities }) => {
    try {
        entities.forEach(m => {
            Container.set(m.name, m.model);
        });
        return true;
    }
    catch (e) {
        throw new Error(e);
    }
});


/***/ }),

/***/ "./apps/api/src/app/loaders/index.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/app/loaders/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apollo.loader */ "./apps/api/src/app/loaders/apollo.loader.ts");
/* harmony import */ var _mongoose_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mongoose.loader */ "./apps/api/src/app/loaders/mongoose.loader.ts");
/* harmony import */ var _dependencyInjector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dependencyInjector */ "./apps/api/src/app/loaders/dependencyInjector.ts");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity */ "./apps/api/src/app/entity/index.ts");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./apps/api/src/environments/environment.ts");


// import { intializeRedisServer } from './redis.loader';








/**
 * Configure server props
 * @param app: Express Instance
 */
const intializeServer = ({ app }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    /**
     * Enable CORS midlleware in production.
     */
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].__pord__) {
        app.use(cors__WEBPACK_IMPORTED_MODULE_7___default()({
            origin: 'YOUR_CLIENT_URL',
            credentials: true
        }));
    }
    else {
        app.use(cors__WEBPACK_IMPORTED_MODULE_7___default()());
    }
    app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_8___default()());
    /**
     * Intialize Redis Server and flush data at start.
     */
    // const redis = await intializeRedisServer();
    // await redis.flushall();
    /**
     * Intialize Mongoose Instance.
     */
    yield Object(_mongoose_loader__WEBPACK_IMPORTED_MODULE_2__["intializeMongoose"])();
    /**
     * Intialize Dependency Injection
     */
    yield Object(_dependencyInjector__WEBPACK_IMPORTED_MODULE_3__["default"])({
        Container: typedi__WEBPACK_IMPORTED_MODULE_4__["Container"],
        entities: [_entity__WEBPACK_IMPORTED_MODULE_6__["userModel"]]
    });
    /**
     * Intialize Apollo GrapQL Server.
     */
    const apolloServer = yield Object(_apollo_loader__WEBPACK_IMPORTED_MODULE_1__["intializeApolloGraphQl"])({ Container: typedi__WEBPACK_IMPORTED_MODULE_4__["Container"] });
    apolloServer.applyMiddleware({ app });
    /**
     * Set Mongoose trace to true in production.
     */
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].__pord__) {
        mongoose__WEBPACK_IMPORTED_MODULE_5___default.a.set('debug', true);
    }
});
/* harmony default export */ __webpack_exports__["default"] = (intializeServer);


/***/ }),

/***/ "./apps/api/src/app/loaders/mongoose.loader.ts":
/*!*****************************************************!*\
  !*** ./apps/api/src/app/loaders/mongoose.loader.ts ***!
  \*****************************************************/
/*! exports provided: intializeMongoose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intializeMongoose", function() { return intializeMongoose; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./apps/api/src/environments/environment.ts");



const intializeMongoose = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    try {
        return yield mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    catch (e) {
        throw new Error('Mongoose Error');
    }
});


/***/ }),

/***/ "./apps/api/src/app/loaders/seedDB.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/loaders/seedDB.ts ***!
  \********************************************/
/*! exports provided: seedDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seedDatabase", function() { return seedDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entity_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity/user */ "./apps/api/src/app/entity/user.ts");


/**
 * ? Use this file to insert Dummy data into database
 * ! You will be prompted at cmd to seed the database.
 */
function seedDatabase() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const User = new _entity_user__WEBPACK_IMPORTED_MODULE_1__["UserModel"]({
            name: "Test",
            username: "test09",
            email: "test@github.com",
            password: "test09",
            bio: `Full Stack Developer 🚀 and Designer 📟 with a penchant for minimalistic design and Web Technologies 🕸️. I am passionate about enhancing user experience and maximizing user interface. I have hands-on experience in building Web Applications and API's, JavaScript frameworks, including performance, scalable, efficient and maintainable products 👨‍💻.`,
        });
        yield User.save();
        return true;
    });
}


/***/ }),

/***/ "./apps/api/src/app/middlewares/isAuthenticated.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/middlewares/isAuthenticated.ts ***!
  \*********************************************************/
/*! exports provided: authChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authChecker", function() { return authChecker; });
/**
 * Authentication Middleware
 */
const authChecker = (graphqlPayload) => {
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


/***/ }),

/***/ "./apps/api/src/app/middlewares/typegoose.middleware.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/middlewares/typegoose.middleware.ts ***!
  \**************************************************************/
/*! exports provided: TypegooseMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypegooseMiddleware", function() { return TypegooseMiddleware; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
/* harmony import */ var _typegoose_typegoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @typescript-eslint/no-non-null-assertion */


const TypegooseMiddleware = (_, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const result = yield next();
    if (Array.isArray(result)) {
        return result.map(item => (item instanceof mongoose__WEBPACK_IMPORTED_MODULE_1__["Model"] ? convertDocument(item) : item));
    }
    if (result instanceof mongoose__WEBPACK_IMPORTED_MODULE_1__["Model"]) {
        return convertDocument(result);
    }
    return result;
});
function convertDocument(doc) {
    const convertedDocument = doc.toObject();
    const DocumentClass = Object(_typegoose_typegoose__WEBPACK_IMPORTED_MODULE_2__["getClassForDocument"])(doc);
    Object.setPrototypeOf(convertedDocument, DocumentClass.prototype);
    return convertedDocument;
}


/***/ }),

/***/ "./apps/api/src/app/modules/User/user.resolver.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/modules/User/user.resolver.ts ***!
  \********************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entity_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../entity/user */ "./apps/api/src/app/entity/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./apps/api/src/app/services/user.service.ts");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! type-graphql */ "type-graphql");
/* harmony import */ var type_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(type_graphql__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let UserResolver = class UserResolver {
    constructor(
    // constructor injection of service
    userService) {
        this.userService = userService;
    }
    users() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userService.getAll();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_3__["Query"])(() => [_entity_user__WEBPACK_IMPORTED_MODULE_1__["User"]]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserResolver.prototype, "users", null);
UserResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(type_graphql__WEBPACK_IMPORTED_MODULE_3__["Resolver"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] !== "undefined" && _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]) === "function" ? _a : Object])
], UserResolver);



/***/ }),

/***/ "./apps/api/src/app/modules/index.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/app/modules/index.ts ***!
  \*******************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_user_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User/user.resolver */ "./apps/api/src/app/modules/User/user.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return _User_user_resolver__WEBPACK_IMPORTED_MODULE_0__["UserResolver"]; });





/***/ }),

/***/ "./apps/api/src/app/services/user.service.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/services/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_1__);


/**
 * User Service
 *  - All the core logic & database request resides here.
 */
let UserService = class UserService {
    /**
     * All the database models required are injected from container.
     * @param UserModel
     */
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.UserModel.find();
        });
    }
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Service"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Inject"])("userModel")),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], UserService);



/***/ }),

/***/ "./apps/api/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    __pord__: "development" === 'production',
    port: process.env.PORT,
    apollo_key: process.env.APOLLO_KEY,
    apollo_graph_variant: process.env.APOLLO_GRAPH_VARIANT,
    redis_port: process.env.REDIS_PORT,
    redis_host: process.env.REDIS_HOST,
    mongo_url: process.env.MONGO_URL,
};


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./apps/api/src/app/index.ts");
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
__webpack_require__(/*! newrelic */ "newrelic");

new _app__WEBPACK_IMPORTED_MODULE_0__["default"]();


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\DevUnderflow\nx-node-apollo-mongo\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@typegoose/typegoose":
/*!***************************************!*\
  !*** external "@typegoose/typegoose" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ "apollo-cache-control":
/*!***************************************!*\
  !*** external "apollo-cache-control" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-control");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "newrelic":
/*!***************************!*\
  !*** external "newrelic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("newrelic");

/***/ }),

/***/ "readline":
/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "type-graphql":
/*!*******************************!*\
  !*** external "type-graphql" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("type-graphql");

/***/ }),

/***/ "typedi":
/*!*************************!*\
  !*** external "typedi" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typedi");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map