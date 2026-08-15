const redis = require('ioredis').default

const redisInstace = new redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_POST,
    password: process.env.REDIS_PASSWORD
}) 


const connectToRedis = async () => {
    try {
        const connectingInstace = await redisInstace.on('connect')
        console.log('Radis is connected succcessfuly.', connectingInstace.connection.host)
    } catch (error) {
        console.log('Radis is facing error to connect ',error)
    }
} 

module.exports = connectToRedis