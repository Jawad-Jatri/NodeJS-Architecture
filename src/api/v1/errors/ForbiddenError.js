import CustomAPIError from "./CustomApiError"
import {StatusCodes} from "../utils/statusCode.js"

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_403_FORBIDDEN
  }
}

export default ForbiddenError