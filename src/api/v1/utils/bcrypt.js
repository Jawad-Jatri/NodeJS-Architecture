const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

const checkPassword = async(requestedPassword, actualPassword) => {
  return bcrypt.compare(requestedPassword, actualPassword)
}

module.exports = {
  hashPassword, checkPassword
}