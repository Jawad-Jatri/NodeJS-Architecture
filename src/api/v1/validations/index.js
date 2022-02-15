import {validEmail} from "./isValidEmail.js"
import {required} from "./isRequired.js"
import {type} from "./isType.js"
import {validPassword} from "./isValidPassword.js"
import {validRoles} from "./hasValidRoles.js"


export const validator = ({CustomApiError}) => {
  const isValidEmail = validEmail({CustomApiError})
  const isRequired = required({CustomApiError})
  const isType = type({CustomApiError})
  const isValidPassword = validPassword({CustomApiError})
  const hasValidRoles = validRoles({CustomApiError})

  return Object.freeze({
    isValidEmail, isRequired, isType, isValidPassword, hasValidRoles
  })
}

