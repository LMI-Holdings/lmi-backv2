"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        title: 'LMI API',
        description: "LMI Api for LMI, by DevLaps, By God's Grace"
    },
    host: 'localhost:2000',
    definitions: {
        FreightDetails: {
            type: 'object',
            properties: {
                // Define the properties of your DTO
                // For example, assuming FreightDetails has properties 'property1' and 'property2'
                property1: {
                    type: 'string',
                    description: 'Description of property1',
                },
                property2: {
                    type: 'number',
                    description: 'Description of property2',
                },
                // Add more properties as needed
            },
        },
    },
};
const outputFile = './src/swagger-output.json';
const routes = [
    './src/routers/auth.router.ts',
    './src/routers/management.router.ts',
    './src/routers/services.router.ts',
];
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
(0, swagger_autogen_1.default)()(outputFile, routes, doc);
