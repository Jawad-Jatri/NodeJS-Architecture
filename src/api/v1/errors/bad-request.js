const CustomAPIError = require("./custom-error");
const {StatusCodes} = require("../utils/status-codes");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_400_BAD_REQUEST
  }
}

module.exports = BadRequestError
