import CustomAPIError from "./CustomApiError"
import {StatusCodes} from "../utils/statusCode.js"

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_401_UNAUTHORIZED
  }
}

export default UnauthenticatedError