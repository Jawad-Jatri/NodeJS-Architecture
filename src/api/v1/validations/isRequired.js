export const required = ({CustomError}) => {
  return (key, value) => {
    if (value) {
      return true
    }
    throw new CustomError.BadRequestError(`${key} is required`)
  }
}
