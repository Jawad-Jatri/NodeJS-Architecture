const {initialUser,login,refreshToken} = require("../../controllers/Auth")

const AuthRoutes = (router, Path, successCallback) => {
  return router.post(Path.AUTH.INIT_PATH, successCallback(initialUser))
    .post(Path.AUTH.LOGIN_PATH, successCallback(login))
    .post(Path.AUTH.REFRESH_TOKEN_PATH, successCallback(refreshToken))
}

module.exports = {
  AuthRoutes
}
