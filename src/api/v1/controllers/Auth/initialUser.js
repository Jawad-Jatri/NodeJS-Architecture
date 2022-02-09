module.exports.makeInitialUser = ({initialUserService}) => {
  return async (app, httpRequest) => {
    const {StatusCodes, ResponseMessage, CustomError} = app
    const {body} = httpRequest

    // if(!body.name || typeof username !== "string") throw new CustomError.BadRequestError(ResponseMessage.INVALID_USER)
    // if(!password || typeof password !== "string" || password.length < 8) throw new CustomError.BadRequestError(ResponseMessage.INVALID_USER)

    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: StatusCodes.HTTP_200_OK,
      body: {message: ResponseMessage.SUCCESS}
    }
  }
}
