const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const {connectDB} = require("./db")
const {listener} = require("./listener")
const {errorHandlerMiddleware} = require("../api/v1/middlewares/error-handler")

const initialize = (express) => {
  const app = express()
  dotenv.config();

  app.use(helmet());
  app.use(express.json());
  app.use(cors());
  app.use(errorHandlerMiddleware)

  connectDB(mongoose)
  listener(app)
}

module.exports = {
  initialize
}