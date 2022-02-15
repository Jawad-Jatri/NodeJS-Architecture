export const required = ({CustomApiError}) => {
  return (key, value) => {
    if (value) {
      return true
    }
    throw new CustomApiError.BadRequestError(`${key} is required`)
  }
}
