 export const validRoles = ({CustomApiError}) => {
  return (values, roles) => {
    if (values.every((error) => {
      return Object.values(roles).includes(parseInt(error));
    })) {
      return true
    }
    throw new CustomApiError.BadRequestError(`Invalid user roles`)
  }
}