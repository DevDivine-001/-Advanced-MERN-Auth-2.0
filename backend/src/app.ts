import "dotenv/config" // Load environment variables first
import cookieParser from "cookie-parser"
import express, { Request, Response } from "express"
import cors from "cors"
import { config } from "./config/app.config"
import connectDatabase from "./DB/Database"
import { errorHandler } from "./middlewares/errorHandler"
import { HTTPSTATUS } from "./config/http.config"
import { asyncHandler } from "./middlewares/asyncHandler"
import authRoutes from "./controller/auth/auth.routes"


const app = express()
const BASE_PATH = config.BASE_PATH


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
    origin: config.APP_ORIGIN,
    credentials: true
}))

app.use(cookieParser())

app.get("/", asyncHandler(async (req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK).json({
        message: "Hello Subscribers!!!!👋👋👋👋"

    })
})
)

app.post("/", asyncHandler(async (req: Request, res: Response) => {
    res.status(HTTPSTATUS.OK).json({
        message: "Hello Subscribers!!!!👋👋👋👋"

    })
})
)

app.use(`${BASE_PATH}/auth`, authRoutes)

app.use(errorHandler)

app.listen(config.PORT, async () => {
    console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`)
    await connectDatabase()
})

