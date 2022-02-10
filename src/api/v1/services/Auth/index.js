const {makeLoginService} = require("./login")
const {makeInitialUserService} = require("./initialUser")
const {makeRefreshTokenService} = require("./refreshToken")
const {User} = require("../../repositories")


const loginService = makeLoginService({User})
const initialUserService = makeInitialUserService({User})
const refreshTokenService = makeRefreshTokenService({User})

module.exports = {
  loginService, initialUserService, refreshTokenService
}
