const CustomAPIError = require("./custom-error");
const {StatusCodes} = require("../utils/status-codes");

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_403_FORBIDDEN
  }
}

module.exports = ForbiddenError