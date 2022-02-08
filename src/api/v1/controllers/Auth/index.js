const {makeLogin} = require('./login')
const {makeRefreshToken} = require('./refreshToken')
const {makeInitialUser} = require('./initialUser')

const {
  loginService, refreshTokenService, initialUserService
} = require('../../services/Auth')


const login = makeLogin({loginService})
const refreshToken = makeRefreshToken({refreshTokenService})
const initialUser = makeInitialUser({initialUserService})

module.exports = {
  initialUser, login, refreshToken
}
