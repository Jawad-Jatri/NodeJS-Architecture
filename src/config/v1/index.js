const {Routes} = require("../../api/v1/routes")
const {errorHandlerMiddleware} = require("../../api/v1/middlewares/error-handler")
const {notFound} = require("../../api/v1/middlewares/not-found")
const {validator} = require("../../api/v1/validations")
const {successCallback} = require("../../api/v1/success-callback")
const {StatusCodes} = require('../../api/v1/utils/status-codes');
const {ResponseMessage} = require('../../api/v1/utils/response-message');
const Path = require("../../api/v1/utils/api-urls")
const Roles = require("../../api/v1/utils/roles")
const CustomError = require("../../api/v1/errors")
const Bcrypt = require("../../api/v1/utils/bcrypt")

const v1 = (application) => {
  const {app} = application
  const Validator = validator({CustomError})
  const appV1 = Object.freeze({
    ...application,
    successCallback,
    Path,
    StatusCodes,
    ResponseMessage,
    CustomError,
    Validator,
    Bcrypt,
    Roles
  })
  app.use(Path.API_ROOT_PATH + Path.API_VERSION_PATH, Routes(appV1))
  app.use(errorHandlerMiddleware(appV1))
  app.use(notFound(appV1))
}

module.exports = {
  v1
}
