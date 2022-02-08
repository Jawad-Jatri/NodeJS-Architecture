const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const {listener} = require("./listener")
const {v1} = require("./v1")


const initialize = () => {
  const app = express()
  const router = express.Router()
  const json = express.json()
  const application = Object.freeze({app, router, json})
  dotenv.config();

  app.use(helmet());
  app.use(cors());
  app.use(json);
  v1(application)
  listener(app)
}

module.exports = {
  initialize
}
