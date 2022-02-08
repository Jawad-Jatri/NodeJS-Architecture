const {makeLogin} = require('./login')
const {makeRefreshToken} = require('./refreshToken')
const {makeInitialUser} = require('./initialUser')


const login = makeLogin()
const refreshToken = makeRefreshToken()
const initialUser = makeInitialUser()

module.exports = {
  initialUser, login, refreshToken
}
