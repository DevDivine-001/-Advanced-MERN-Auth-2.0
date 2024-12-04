import "dotenv/config" // Load environment variables first
import cookieParser from "cookie-parser"
import express, { Request, Response } from "express"
import cors from "cors"
import { config } from "./config/app.config"
import connectDatabase from "./DB/Database"
import { errorHandler } from "./middlewares/errorHandler"


const app = express()
// const BASE_PATH = config.BASE_PATH


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: config.APP_ORIGIN,
    credentials: true
}))

app.use(cookieParser())

app.post("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello Subscribers!!!!👋👋👋👋"

    })
})

app.use(errorHandler)

app.listen(config.PORT, async () => {
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`)
    await connectDatabase()
})

