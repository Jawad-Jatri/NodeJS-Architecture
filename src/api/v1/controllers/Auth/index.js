const initialUser = () => {
  console.log('initialUser')
}
const login = async () => {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 200,
    body: {message: 'success'}
  }
}
const refreshToken = () => {
  console.log('refreshToken')
}

module.exports = {
  initialUser, login, refreshToken
}
