const {AuthRoutes} = require("./Auth")
const {AdminRoutes} = require("./Admin")

const Routes = (app) => {
  const {router, Path} = app
  return router.use(Path.AUTH.ROOT_PATH, AuthRoutes(app))
    .use(Path.ADMIN.ROOT_PATH, AdminRoutes(app))
}

module.exports = {
  Routes
}
