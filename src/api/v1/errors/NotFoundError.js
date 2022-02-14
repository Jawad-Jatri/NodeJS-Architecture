import CustomAPIError from "./CustomApiError"
import {StatusCodes} from "../utils/statusCode.js"

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_404_NOT_FOUND
  }
}

export default NotFoundError