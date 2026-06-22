const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoutes');
const studentRouter = require('./routes/studentRoutes')


dotenv.config()

const app = express()

//Middleware
app.use(cors())
app.use(express.json())

//Db
connectDB()

//Routers
app.use("/api/auth", authRouter)
app.use("/api/students", studentRouter)

app.get("/", (req, res)=>{
    res.send("Api is working")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
