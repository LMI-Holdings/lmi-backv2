import swaggerAutogen from 'swagger-autogen';
import { FreightDetails } from './dtos/ClientServices';

const doc = {
  info: {
    title: 'LMI API',
    description: "LMI Api for LMI, by DevLaps, By God's Grace"
  },
  host: 'localhost:2000',
  definitions: {
    FreightDetails: {  // Add your DTO definition here
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

swaggerAutogen()(outputFile, routes, doc);