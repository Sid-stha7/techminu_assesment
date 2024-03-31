const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "My REST API",
    },
    servers: [
      {
        url: "http://localhost:5000", // Change this to your server URL
      },
    ],
  },
  apis: ["../route/*.js"], // Path to the API routes directory
};

const specs = swaggerJsdoc(options);

module.exports = specs;
