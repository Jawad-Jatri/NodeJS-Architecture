export const validPassword = ({CustomError}) => {
  return (password, len) => {
    if (password.length >= len) {
      return true
    }
    throw new CustomError.BadRequestError(`Invalid Password! Must be greater than ${len}`)
  }
}
