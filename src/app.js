const express = require("express");
const cors = require("cors");
const passport = require("passport");
const httpStatus = require("http-status");
const routes = require("./route");
const { jwtStrategy } = require("./config/passport");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./helper/ApiError");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
process.env.PWD = process.cwd();

const app = express();

const swaggerOptions = {
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
  apis: ["./route/*.js"], // Path to the API routes directory
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
// enable cors
app.use(cors());
app.options("*", cors());

app.use(express.static(`${process.env.PWD}/public`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// jwt authentication
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.get("/", async (req, res) => {
  res.status(200).send("Congratulations! API is working!");
});
app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
const db = require("./models");

// Uncomment this line if you want to sync database model
db.sequelize.sync();

module.exports = app;
