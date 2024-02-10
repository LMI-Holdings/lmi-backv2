import swaggerJsdocs from 'swagger-jsdoc'

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "LMI BACKEND API",
        version: "0.1.0",
        description:
          "this is lmi backend api",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LMI",
          url: "",
          email: "lmi@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8000",
        },
      ],
    },
    apis: ["./docs/*.ts"],
  };
 const specs = swaggerJsdocs(options)

 export default specs