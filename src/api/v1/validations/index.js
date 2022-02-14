import {validEmail} from "./isValidEmail.js"
import {required} from "./isRequired.js"
import {type} from "./isType.js"
import {validPassword} from "./isValidPassword.js"
import {validRoles} from "./hasValidRoles.js"


export const validator = ({CustomError}) => {
  const isValidEmail = validEmail({CustomError})
  const isRequired = required({CustomError})
  const isType = type({CustomError})
  const isValidPassword = validPassword({CustomError})
  const hasValidRoles = validRoles({CustomError})

  return Object.freeze({
    isValidEmail, isRequired, isType, isValidPassword, hasValidRoles
  })
}

