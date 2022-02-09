module.exports.makeLoginService = ({userDB}) => {
  return async (payload) => {
    return await userDB.findAll()
  }
}

