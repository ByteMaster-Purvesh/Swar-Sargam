const mongoose = require("mongoose")

const connetToDatabase = async () => {
    try {
        const dataBaseInstantce = await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DATABASE_NAME}`)
        console.log(` Database Connected Succesfully : ${dataBaseInstantce.connection.host}`)
    } catch ( error ) {
        console.log(` Database Connecte Failure Error : ${ error }`)
        process.exit(1)
    }
}

module.exports = connetToDatabase