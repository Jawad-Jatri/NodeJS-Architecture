export const type = ({CustomApiError}) => {
  return (key, value) => {
    if(typeof key === value){
      return true
    }
    throw new CustomApiError.BadRequestError(`Invalid Type!${key} must be a ${value}`)
  }
}
