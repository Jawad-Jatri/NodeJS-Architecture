const {initialUser, login, refreshToken} = require("../../controllers/Auth")

const AuthRoutes = (app) => {
  const {router, Path, successCallback} = app
  return router.post(Path.AUTH.INIT_PATH, successCallback(app, initialUser))
    .post(Path.AUTH.LOGIN_PATH, successCallback(app, login))
    .post(Path.AUTH.REFRESH_TOKEN_PATH, successCallback(app, refreshToken))
}

module.exports = {
  AuthRoutes
}
