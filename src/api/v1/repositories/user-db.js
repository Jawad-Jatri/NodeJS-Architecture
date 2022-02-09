// const {User} = require("../models/User")

const makeUserDb = ({connectDb},User) => {
  const findAll = async () => {
    await connectDb()
    // const user = User(db)
    return {
      name: "akil",
      address: "Dhaka"
    }
  }
  const insert = async (user) => {
    await connectDb()
    const userInsert = await User.create(user)
    return {
      ...userInsert
    }
  }
  return Object.freeze({
    findAll,
    insert
  })
}

module.exports = {
  makeUserDb
}
