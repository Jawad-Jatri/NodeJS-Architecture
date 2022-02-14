 export const validRoles = ({CustomError}) => {
  return (values, roles) => {
    if (values.every(function (e) {
      return Object.values(roles).includes(parseInt(e));
    })) {
      return true
    }
    throw new CustomError.BadRequestError(`Invalid user roles`)
  }
}