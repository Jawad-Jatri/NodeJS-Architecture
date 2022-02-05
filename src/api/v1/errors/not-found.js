const CustomAPIError = require("./custom-error");
const {StatusCodes} = require("../utils/status-codes");

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.HTTP_404_NOT_FOUND
  }
}

module.exports = NotFoundError