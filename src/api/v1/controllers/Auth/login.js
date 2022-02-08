module.exports.makeLogin = ({loginService}) => {
  return async (app,httpRequest) => {
    const {StatusCodes, ResponseMessage} = app
    const login = await loginService(httpRequest)
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: StatusCodes.HTTP_200_OK,
      body: {message: ResponseMessage.SUCCESS}
    }
  }
}
