const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const uniqueValidator = require("mongoose-unique-validator");
const {Routes} = require("../../api/v1/routes")
const {StatusCodes} = require('../../api/v1/utils/status-codes');
const {ResponseMessage} = require('../../api/v1/utils/response-message');
const {errorHandlerMiddleware} = require("../../api/v1/middlewares/error-handler")
const {notFound} = require("../../api/v1/middlewares/not-found")
const Path = require("../../api/v1/utils/api-urls")
const {successCallback} = require("../../api/v1/success-callback")
const {connectDB} = require("./db")

const v1 = (application) => {
  const {app} = application
  const appV1 = Object.freeze({
    ...application,
    successCallback,
    mongoose,
    mongoosePaginate,
    uniqueValidator,
    Path,
    StatusCodes,
    ResponseMessage
  })
  app.use(Path.API_ROOT_PATH + Path.API_VERSION_PATH, Routes(appV1))
  app.use(errorHandlerMiddleware(appV1))
  app.use(notFound(appV1))
  connectDB(mongoose)
}

module.exports = {
  v1
}
