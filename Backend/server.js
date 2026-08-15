const dotenv = require("dotenv").config()
const app = require("./src/app")
const connectToDatabse = require("./config/dataBase.Config")

const PORT = process.env.PORT || 3000

// Connet to Database
connectToDatabse()

app.listen( PORT, (req, res) => {
    console.log(`\n Server is running URL : http://localhost:${PORT}`)
})