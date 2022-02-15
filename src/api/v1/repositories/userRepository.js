export const userRepository = ({connectDb}, User) => {
  const find = async (phone) => {
    await connectDb()
    let user = await User.findOne({phone: phone}).populate("companyId").populate("counterId")
    if (user) {
      return user
    }
    return null;
  }
  const findByPhoneWithPassword = async (phone) => {
    await connectDb()
    let user = await User.findOne({phone: phone}).populate("companyId").populate("counterId").select("+password")
    if (user) {
      return user
    }
    return null;
  }
  const insert = async (request) => {
    await connectDb()
    let user = new User(request)
    return await user.save()
  }

  const update = async (filter, userInfo) => {
    await connectDb()
    let user = await User.updateOne(filter, {$set: userInfo}, {new: true, runValidators: true, context: "query"})
    if(user){
      return user
    }
    return null
  }
  return Object.freeze({
    find,
    findByPhoneWithPassword,
    insert,
    update
  })
}

