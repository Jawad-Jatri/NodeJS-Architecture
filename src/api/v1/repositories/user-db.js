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
    let newUser = new User(user)
    return await newUser.save()
  }
  return Object.freeze({
    findAll,
    insert
  })
}

module.exports = {
  makeUserDb
}
