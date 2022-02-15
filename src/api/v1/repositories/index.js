import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"
import aggregatePaginate from "mongoose-aggregate-paginate-v2"
import uniqueValidator from "mongoose-unique-validator"
import ResponseMessage from "../utils/responseMessage.js"
import {UserSchema} from "../models/User.js"
import {CompanySchema} from "../models/Company.js"
import {CounterSchema} from "../models/Counter.js"
import {userRepository} from "./userRepository.js"

export const connectDb = async () => {
  if (mongoose.connection.readyState !== 1) {
    if (process.env.ENVIRONMENT === "development") {
      await mongoose.connect(process.env.MONGODB_CON_STRING_DEV);
    } else {
      await mongoose.connect(process.env.MONGODB_CON_STRING_PRODUCTION);
    }
  }
}

export const model = (modelName, schema) => {
  return mongoose.model(modelName, schema({mongoose, aggregatePaginate, uniqueValidator, ResponseMessage}))
}

export const User = userRepository({connectDb}, model("User", UserSchema))
export const Company = userRepository({connectDb}, model("Company", CompanySchema))
export const Counter = userRepository({connectDb}, model("Counter", CounterSchema))


