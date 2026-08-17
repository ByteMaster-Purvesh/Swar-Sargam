const jwt = require('jsonwebtoken')
const redisInstance = require('../config/cache.Config')

const authUser = async ( req, res, next ) => {
    const token = req.cookies?.token

    if( !token ){
        return res.status(401).json({
            message: 'Token not found.'
        })
    }

    try {
        const isTokenIsBlacklisted = await redisInstance.get(token).catch(() => null)
        if( isTokenIsBlacklisted ){
            return res.status(401).json({
                message: 'Token Invalid!'
            })
        }
    } catch (err) {
        // Redis fallback if offline
    }

    try {
        const decoded = jwt.verify( token, process.env.JWT_SECRET_TOKEN)
        req.user = decoded
        next()
    } catch(error){
        console.log('Token verification failed:', error?.message)
        return res.status(401).json({ message: 'Invalid or expired token' })
    }
}

module.exports = { authUser }