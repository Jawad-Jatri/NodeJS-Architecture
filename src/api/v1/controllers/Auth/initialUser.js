export const makeInitialUser = ({initialUserService}) => {
  return async (app, httpRequest) => {
    const {StatusCodes, ResponseMessage, Validator, Bcrypt, CustomError, Roles} = app
    const {body} = httpRequest

    Validator.isRequired("name", body.name)
    Validator.isRequired("phone", body.phone)
    Validator.isRequired("password", body.password)
    Validator.isRequired("roles", body.roles)
    Validator.isType(body.name, "string")
    Validator.isType(body.phone, "string")
    Validator.isType(body.password, "string")
    Validator.isType(body.roles, "string")
    Validator.isValidPassword(body.password, 8)
    Validator.hasValidRoles(body.roles.split(","), Roles.Admin)
    body.email ? Validator.isValidEmail(body.email) : null

    let initUser = await initialUserService(body, {...Bcrypt})
    if(initUser){
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: StatusCodes.HTTP_200_OK,
        body: {
          message: ResponseMessage.USER_ADDED_SUCCESS,
          user : initUser
        }
      }
    }else {
      throw new CustomError.BadRequestError(ResponseMessage.INVALID_REQUEST_PAYLOAD)
    }
  }
}
