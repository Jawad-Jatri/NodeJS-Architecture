import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import cookieParser from 'cookie-parser'
import { v1 } from "./v1/index.js"




const app = express()
const router = express.Router()
const json = express.json()
dotenv.config();

app.use(helmet());
app.use(cors());
app.use(json);
app.use(cookieParser(process.env.ACCESS_TOKEN_SECRET))

const application = Object.freeze({app, router, json})
v1(application)

export default app
