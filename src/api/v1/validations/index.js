const {validEmail} = require("./isValidEmail")
const {required} = require("./isRequired")
const {type} = require("./isType")
const {validPassword} = require("./isValidPassword")
const {validRoles} = require("./hasValidRoles")

const validator = ({CustomError}) => {
  const isValidEmail = validEmail({CustomError})
  const isRequired = required({CustomError})
  const isType = type({CustomError})
  const isValidPassword = validPassword({CustomError})
  const hasValidRoles = validRoles({CustomError})

  return Object.freeze({
    isValidEmail, isRequired, isType, isValidPassword, hasValidRoles
  })
}

module.exports = {
  validator
}
