export const makeInitialUserService = ({User}) => {
  return async (body, {hashPassword}) => {
    let user = {
      name: body.name,
      phone: body.phone,
      password: hashPassword(body.password),
      email: body.email,
      designation: body.designation,
      address: body.address,
      nid: body.nid,
      avatar: "",
      transactionType: body.transactionType,
      balance: 0,
      commission: 0,
      commissionType: "",
      userType: body.userType,
      discountAccess: body.discountAccess,
      roles: body.roles,
      status: body.status,
      seatPlanEditAccess: false,
      counterReportAccess: "",
      api_token: "",
      device_token: "",
      reset_token: "",
    }
    return User.insert(user)
  }
}

