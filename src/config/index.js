const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const {connectDB} = require("./db")
const {listener} = require("./listener")
const {Routes} = require("../api/v1/routes")
const {StatusCodes} = require('../api/v1/utils/status-codes');
const {ResponseMessage} = require('../api/v1/utils/response-message');
const {errorHandlerMiddleware} = require("../api/v1/middlewares/error-handler")
const {notFound} = require("../api/v1/middlewares/not-found")
const Path = require("../api/v1/utils/api-urls")
const {successCallback} = require("../api/v1/success-callback")


const initialize = (express) => {
  const app = express()
  const router = express.Router()
  const json = express.json()
  dotenv.config();

  app.use(helmet());
  app.use(cors());
  app.use(json);
  app.use(Path.API_ROOT_PATH + Path.API_VERSION_PATH, Routes(router, Path, successCallback))
  app.use(errorHandlerMiddleware(StatusCodes, ResponseMessage))
  app.use(notFound(StatusCodes, ResponseMessage))

  connectDB(mongoose)
  listener(app)
}

module.exports = {
  initialize
}
