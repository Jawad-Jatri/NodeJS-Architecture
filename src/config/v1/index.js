import {Routes} from "../../api/v1/routes/index.js"
import {errorHandlerMiddleware} from "../../api/v1/middlewares/errorHandler.js"
import {notFound} from "../../api/v1/middlewares/notFound.js"
import {validator} from "../../api/v1/validations/index.js"
import successCallback from "../../api/v1/successCallback/index.js"
import StatusCodes from '../../api/v1/utils/statusCode.js'
import ResponseMessage from '../../api/v1/utils/responseMessage.js'
import * as Path from "../../api/v1/utils/apiUrls.js"
import * as Roles from "../../api/v1/utils/roles.js"
import CustomApiError from "../../api/v1/errors/CustomApiError.js"
import * as Bcrypt from "../../api/v1/utils/bcrypt.js"
import * as JWT from "../../api/v1/utils/jwt.js"

export const v1 = (application) => {
  const {app} = application
  const Validator = validator({CustomApiError})
  const appV1 = Object.freeze({
    ...application,
    successCallback,
    Path,
    StatusCodes,
    ResponseMessage,
    CustomApiError,
    Validator,
    Bcrypt,
    Roles,
    JWT
  })
  app.use(Path.API_ROOT_PATH + Path.API_VERSION_PATH, Routes(appV1))
  app.use(errorHandlerMiddleware(appV1))
  app.use(notFound(appV1))
}


