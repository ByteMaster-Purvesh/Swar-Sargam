const redis = require('ioredis').default

const redisInstance = new redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
}) 

try {
    redisInstance.on('connect', () => {
    console.log(' Redis is connected successfully!')
})
} catch (error) {
    console.log(' Redis is faccing an error: ', error)
}

module.exports = redisInstance