const {makeLoginService} = require("./login")
const {makeInitialUserService} = require("./initialUser")
const {makeRefreshTokenService} = require("./refreshToken")
const {userDB} = require("../../repositories")

const loginService = makeLoginService({userDB})
const initialUserService = makeInitialUserService({userDB})
const refreshTokenService = makeRefreshTokenService({userDB})

module.exports = {
  loginService, initialUserService, refreshTokenService
}
