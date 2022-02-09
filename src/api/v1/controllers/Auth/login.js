module.exports.makeLogin = ({loginService}) => {
  return async (app, httpRequest) => {
    const {StatusCodes, ResponseMessage, Validator} = app
    const {username, password} = httpRequest.body

    Validator.isRequired("username",username)
    Validator.isRequired("password",password)
    Validator.isType(username,"string")
    Validator.isType(password,"string")
    Validator.isValidPassword(password,8)

    const login = await loginService(httpRequest)
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: StatusCodes.HTTP_200_OK,
      body: {message: ResponseMessage.SUCCESS, login}
    }
  }
}
