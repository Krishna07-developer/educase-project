import express from "express"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
dotenv.config()
import { connectedDb } from "./config/database.js"
import cookieParser from "cookie-parser"
import cors from 'cors'


const corsOptions = {
    origin : 'http://localhost:3000',
    credentials : true
}

const PORT = process.env.PORT || 3500

connectedDb();

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())




app.use('/api',authRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})