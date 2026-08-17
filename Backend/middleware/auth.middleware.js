const jwt = require('jsonwebtoken')
const redisInstance = require('../config/cache.Config')
// const blacklistModel = require('../module/blackListing.module')


const authUser = async ( req, res, next ) => {
    const token = req.cookies.token

    if( !token ){
        return res.status(401).json({
            massage: 'Token not Extist.'
        })
    }

    const isTokenIsBlacklisted = await redisInstance.get(token)

    if( isTokenIsBlacklisted ){
        return res.status(401).json({
            message: 'Token Invalied!'
        })
    }

    try{
        const decoded = await jwt.verify( token, process.env.JWT_SECRET_TOKEN)
        req.user = decoded

        next()
    } catch(error){
        console.log('Token is not matching : ', error)
    }
}

module.exports = {authUser}