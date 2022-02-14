export const makeLoginService = ({User}) => {
  return async (app, body) => {
    let {ResponseMessage, CustomError, Bcrypt, JWT} = app
    let {checkPassword} = Bcrypt
    let {authenticationToken} = JWT

    let user = await User.findByPhoneWithPassword(body.username)
    if (user) {
      if(user && user.status){
        if(await checkPassword(body.password,user.password)){
          await User.update({_id: user._id},{ reset_token: "" })

          return authenticationToken({
            _id: user._id,
            name: user.name,
            userType: user.userType,
            company: user.companyId,
            counter: user.counterId,
            printerType: user.printerType,
            printingType: user.printingType,
            balance: user.balance,
            direction: user.direction,
            commission: user.commission,
            roles: JSON.parse("[" + user.roles[0] + "]"),
          },{
            _id: user._id
          })
        }
        throw new CustomError.BadRequestError(ResponseMessage.INVALID_USER)
      }
      throw new CustomError.BadRequestError(ResponseMessage.INVALID_USER)
    }
    throw new CustomError.NotFoundError(ResponseMessage.USER_NOT_FOUND)
  }
}

