import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        crediantals:true
    }
))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))//public folder to save anything
app.use(cookieParser())

export { app }