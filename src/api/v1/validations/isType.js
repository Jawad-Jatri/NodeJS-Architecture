export const type = ({CustomError}) => {
  return (key, value) => {
    if(typeof key === value){
      return true
    }
    throw new CustomError.BadRequestError(`Invalid Type!${key} must be a ${value}`)
  }
}
