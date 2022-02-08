const AdminRoutes = (app) => {
  const {router, Path, successCallback} = app
  return router.post(Path.AUTH.INIT_PATH, () => {
    console.log("INIT_PATH")
  })
    .post(Path.AUTH.LOGIN_PATH, () => {
      console.log("LOGIN_ATH")
    })
    .post(Path.AUTH.REFRESH_TOKEN_PATH, () => {
      console.log("REFRESH_TOKEN_PATH")
    })
}

module.exports = {
  AdminRoutes
}
