const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const uniqueValidator = require("mongoose-unique-validator");
const {ResponseMessage} = require("../utils/response-message")
const {User} = require("../models/User")

const {makeUserDb} = require("./user-db")

const connectDb = async () => {
  if (mongoose.connection.readyState !== 1) {
    if (process.env.ENVIRONMENT === "development") {
      await mongoose.connect(process.env.MONGODB_CON_STRING_DEV);
    } else {
      await mongoose.connect(process.env.MONGODB_CON_STRING_PRODUCTION);
    }
  }
}

const model = (modelName, schema) => {
  return mongoose.model(modelName, schema({mongoose, mongoosePaginate, uniqueValidator, ResponseMessage}))
}

const userDB = makeUserDb({connectDb}, model("User", User))

module.exports = {
  connectDb,
  userDB
}
