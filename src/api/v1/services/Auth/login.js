module.exports.makeLoginService = ({userDB}) => {
  return async (payload) => {
    await userDB.findAll()
    console.log(payload)
  }
}

