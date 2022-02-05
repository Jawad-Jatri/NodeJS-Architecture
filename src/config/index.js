const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const {connectDB} = require("./db")
const {listener} = require("./listener")

const initialize = (express) => {
  const app = express()
  dotenv.config();

  app.use(helmet());
  app.use(express.json());
  app.use(cors());

  connectDB(mongoose)
  listener(app)
}

module.exports = {
  initialize
}