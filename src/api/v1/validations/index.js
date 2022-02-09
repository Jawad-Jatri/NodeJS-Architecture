// const ResponseMessage = require("../utils/response-message");
// const {CustomError} = require("../errors")
const {validEmail} = require("./isValidEmail")
const {required} = require("./isRequired")
const {type} = require("./isType")
const {validPassword} = require("./isValidPassword")

const validator = ({CustomError}) => {
  const isValidEmail = validEmail({CustomError})
  const isRequired = required({CustomError})
  const isType = type({CustomError})
  const isValidPassword = validPassword({CustomError})

  return Object.freeze({
    isValidEmail, isRequired, isType, isValidPassword
  })
}

module.exports = {
  validator
}
