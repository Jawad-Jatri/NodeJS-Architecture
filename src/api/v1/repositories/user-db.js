const {User} = require("../models/User")

const makeUserDb = ({connectDb}) => {
  const findAll = async () => {
    const db = await connectDb()
    const user = User(db)
    return {
      name: "akil",
      address: "Dhaka"
    }
  }
  return Object.freeze({
    findAll
  })
}

module.exports = {
  makeUserDb
}