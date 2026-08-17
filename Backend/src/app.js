const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRouter = require("../routes/auth.routes")
const dns = require("dns")
dns.setServers([
    '8.8.8.8',
    '1.1.1.1'
])

const app = express()

app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true
}))

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/api/auth", authRouter)

module.exports = app