export const validPassword = ({CustomApiError}) => {
  return (password, len) => {
    if (password.length >= len) {
      return true
    }
    throw new CustomApiError.BadRequestError(`Invalid Password! Must be greater than ${len}`)
  }
}
