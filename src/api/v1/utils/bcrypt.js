import bcrypt from "bcryptjs"

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

export const checkPassword = async(requestedPassword, actualPassword) => {
  return bcrypt.compare(requestedPassword, actualPassword)
}

