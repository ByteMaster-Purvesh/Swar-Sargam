const express = require('express')
const cookieParser = require('cookie-parser')
const blacklist = require('../module/blackListing.module')
const userModule = require('../module/user.module')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const redisInstance = require('../config/cache.Config')

const userRegistration = async ( req, res ) => {
    const { username, email, password } = req.body

    const isUserAlreadyExist = await userModule.findOne({
        $or:[
            { username: username },
            { email: email }
        ]
    })

    if( isUserAlreadyExist ) {
        return res.status(400).json({
            message: 'Invalid credentials, please check your username or email and password!'
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const userCreate = await userModule.create({
        username: username,
        email: email,
        password: hashedPassword
    })

    const token = jwt.sign(
        {
            id: userCreate._id,
            username: userCreate.username
        }, 
        process.env.JWT_SECRET_TOKEN,
        { 
            expiresIn: '1d' 
        }
    )

    res.cookie('token', token)

    res.status(201).json({
        message: 'User registration successfully!',
        user: {
            id: userCreate._id,
            username: userCreate.username,
            email: userCreate.email
        }
    })
}

const userLogin = async ( req, res ) => {
    const { username, email, password } = req.body

    const isUserExist = await userModule.findOne({ 
        $or: [
            { username: username },
            { email: email }
        ]
    }).select('+password')

    

    if( !isUserExist ) {
        return res.status(400).json({
            message: 'Invalid credentials, please check your username or email and password!'
        })
    }

    const isPasswordMatch = await bcrypt.compare(password, isUserExist.password)
    
    if( !isPasswordMatch ) {
        return res.status(400).json({
            message: 'Invalid credentials, please check your username or email and password!'
        })
    }

    const token = jwt.sign({
        id: isUserExist._id,
        username: isUserExist.username
    }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: '1d'
    })

    res.cookie('token', token)

    res.status(200).json({
        message: 'User login successfully!',
        user: {
            id: isUserExist._id,
            username: isUserExist.username,
            email: isUserExist.email
        }
    })
}

const getUser = async ( req, res ) => {
    const user = req.user

    const getUserDetails = await userModule.findById(user.id)

    res.status(200).json({
        message: 'User fetcch Successfuly.',
        getUserDetails
    })
}

const userLogout = async ( req, res ) => {
    const token = req.cookies.token

    res.clearCookie = token
    
    const blacklistToken = await redisInstance.set(token, Date.now().toString(), "EX", 60 * 60 )

    res.status(200).json({
        message: 'Token is blacklisted and User Logout successfuly',
        blacklistToken
    })
}

module.exports = { userRegistration, userLogin, getUser, userLogout }