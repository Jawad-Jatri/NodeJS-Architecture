import CustomAPIError from "./CustomApiError"
import {StatusCodes} from "../utils/statusCode.js"

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_400_BAD_REQUEST
  }
}

export default BadRequestError
