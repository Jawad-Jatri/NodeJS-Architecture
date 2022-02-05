const CustomAPIError = require("./custom-error");
const {StatusCodes} = require("../utils/status-codes");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_401_UNAUTHORIZED
  }
}

module.exports = UnauthenticatedError