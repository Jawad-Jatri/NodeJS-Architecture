import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import cookieParser from 'cookie-parser'
import compression from 'compression'
import { v1 } from "./v1/index.js"




const app = express()
const router = express.Router()
const json = express.json()

dotenv.config();

app.use(helmet());
app.use(cors());
app.use(json);
app.use(cookieParser(process.env.ACCESS_TOKEN_SECRET))
// zgip compression
app.use(
  compression({
    level: 6,
    // threshold: 100 * 1000,
    filter: (req, res) => {
			if (req.headers["x-no-compression"] === "true") {
        return false;
			}
      return compression.filter(req, res);
    },
  })
);

const application = Object.freeze({ app, router, json })

v1(application)

export default app
