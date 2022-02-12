module.exports.makeLogin = ({loginService}) => {
  return async (app, httpRequest) => {
    const {StatusCodes, ResponseMessage, Validator} = app
    const {body} = httpRequest

    Validator.isRequired("username", body.username)
    Validator.isRequired("password", body.password)
    Validator.isType(body.username, "string")
    Validator.isType(body.password, "string")
    Validator.isValidPassword(body.password, 8)

    const login = await loginService(app, body)
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      cookies: login.cookies,
      statusCode: StatusCodes.HTTP_200_OK,
      body: {
        message: ResponseMessage.LOGIN_SUCCESS,
        token: login.accessToken,
        refreshToken: login.refreshToken
      }
    }
  }
}
