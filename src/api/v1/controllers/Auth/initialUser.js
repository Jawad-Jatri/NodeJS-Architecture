module.exports.makeInitialUser = ({initialUserService}) => {
  return async (app,httpRequest) => {
    const {StatusCodes, ResponseMessage} = app
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: StatusCodes.HTTP_200_OK,
      body: {message: ResponseMessage.SUCCESS}
    }
  }
}
