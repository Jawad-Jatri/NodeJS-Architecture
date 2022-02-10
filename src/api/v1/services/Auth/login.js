module.exports.makeLoginService = ({User}) => {
  return async (payload) => {
    return await User.findAll()
  }
}

