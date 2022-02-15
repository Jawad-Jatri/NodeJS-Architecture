export const validEmail = ({CustomApiError}) => {
  return (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      return true
    }
    throw new CustomApiError.BadRequestError("Invalid email!")
  }
}
