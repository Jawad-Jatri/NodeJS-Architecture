import {AuthRoutes} from "./Auth/index.js"
import {AdminRoutes} from "./Admin/index.js"

export const Routes = (app) => {
  const {router, Path} = app
  return router.use(Path.AUTH.ROOT_PATH, AuthRoutes(app))
    .use(Path.ADMIN.ROOT_PATH, AdminRoutes(app))
}


