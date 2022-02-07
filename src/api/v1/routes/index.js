const {AuthRoutes} = require("./Auth")
const {AdminRoutes} = require("./Admin")

const Routes = (router, Path, successCallback) => {
  return router.use(Path.AUTH.ROOT_PATH, AuthRoutes(router, Path, successCallback))
    .use(Path.ADMIN.ROOT_PATH, AdminRoutes(router, Path, successCallback))
}

module.exports = {
  Routes
}
