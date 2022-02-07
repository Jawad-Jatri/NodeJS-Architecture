const mongoose = require("mongoose");
const {Routes} = require("../../api/v1/routes")
const {StatusCodes} = require('../../api/v1/utils/status-codes');
const {ResponseMessage} = require('../../api/v1/utils/response-message');
const {errorHandlerMiddleware} = require("../../api/v1/middlewares/error-handler")
const {notFound} = require("../../api/v1/middlewares/not-found")
const Path = require("../../api/v1/utils/api-urls")
const {successCallback} = require("../../api/v1/success-callback")
const {connectDB} = require("./db")

const v1 = (app, router) => {
  app.use(Path.API_ROOT_PATH + Path.API_VERSION_PATH, Routes(router, Path, successCallback))
  app.use(errorHandlerMiddleware(StatusCodes, ResponseMessage))
  app.use(notFound(StatusCodes, ResponseMessage))
  connectDB(mongoose)
}

module.exports = {
  v1
}
