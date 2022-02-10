const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

const checkPassword = async (requestedPassword, actualPassword) => {
  bcrypt.compare(requestedPassword, actualPassword, (err, success) => {
    return success
  })
}

module.exports = {
  hashPassword, checkPassword
}