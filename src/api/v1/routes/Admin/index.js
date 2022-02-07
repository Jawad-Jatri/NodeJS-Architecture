const AdminRoutes = (router, Path) => {
  return router.post(Path.AUTH.INIT_PATH, () => {
    console.log("INIT_PATH")
  })
    .post(Path.AUTH.LOGIN_PATH, () => {
      console.log("LOGIN_PATH")
    })
    .post(Path.AUTH.REFRESH_TOKEN_PATH, () => {
      console.log("REFRESH_TOKEN_PATH")
    })
}

module.exports = {
  AdminRoutes
}