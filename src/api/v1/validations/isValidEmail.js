module.exports.validEmail = ({CustomError}) => {
  return (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      return true
    }
    throw new CustomError.BadRequestError("Invalid email!")
  }
}
