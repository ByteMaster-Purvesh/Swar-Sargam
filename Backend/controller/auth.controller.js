const express = require('express')
const cookieParser = require('cookie-parser')
const blacklist = require('../module/blackListing.module')
const userModule = require('../module/user.module')
const expressionModule = require('../module/expression.module')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const redisInstance = require('../config/cache.Config')

const userRegistration = async ( req, res ) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required.' })
        }

        const isUserAlreadyExist = await userModule.findOne({
            $or:[
                { username: username },
                { email: email }
            ]
        })

        if( isUserAlreadyExist ) {
            return res.status(400).json({
                message: 'Username or email already exists!'
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

        res.cookie('token', token, { httpOnly: true })

        return res.status(201).json({
            message: 'User registered successfully!',
            user: {
                id: userCreate._id,
                username: userCreate.username,
                email: userCreate.email
            }
        })
    } catch (error) {
        console.error('Registration error:', error)
        return res.status(500).json({ message: error.message || 'Server error during registration' })
    }
}

const userLogin = async ( req, res ) => {
    try {
        const { username, email, password } = req.body

        if (!password || (!username && !email)) {
            return res.status(400).json({ message: 'Please provide email/username and password.' })
        }

        const queryConditions = []
        if (username) queryConditions.push({ username: username })
        if (email) queryConditions.push({ email: email })

        const isUserExist = await userModule.findOne({ $or: queryConditions }).select('+password')

        if( !isUserExist ) {
            return res.status(400).json({
                message: 'Invalid credentials, please check your email/username and password!'
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, isUserExist.password)
        
        if( !isPasswordMatch ) {
            return res.status(400).json({
                message: 'Invalid credentials, please check your email/username and password!'
            })
        }

        const token = jwt.sign({
            id: isUserExist._id,
            username: isUserExist.username
        }, process.env.JWT_SECRET_TOKEN, {
            expiresIn: '1d'
        })

        res.cookie('token', token, { httpOnly: true })

        return res.status(200).json({
            message: 'User logged in successfully!',
            user: {
                id: isUserExist._id,
                username: isUserExist.username,
                email: isUserExist.email
            }
        })
    } catch (error) {
        console.error('Login error:', error)
        return res.status(500).json({ message: error.message || 'Server error during login' })
    }
}

const getUser = async ( req, res ) => {
    try {
        const user = req.user
        const getUserDetails = await userModule.findById(user.id)

        if (!getUserDetails) {
            return res.status(404).json({ message: 'User not found' })
        }

        return res.status(200).json({
            message: 'User fetched successfully.',
            user: {
                id: getUserDetails._id,
                username: getUserDetails.username,
                email: getUserDetails.email
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Error fetching user' })
    }
}

const userLogout = async ( req, res ) => {
    try {
        const token = req.cookies?.token

        res.clearCookie('token')
        
        if (token) {
            try {
                await redisInstance.set(token, Date.now().toString(), "EX", 60 * 60)
            } catch (rErr) {
                console.log("Redis blacklist set failed:", rErr?.message)
            }
        }

        return res.status(200).json({
            message: 'User logged out successfully'
        })
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Error logging out' })
    }
}

const saveExpression = async ( req, res ) => {
    try {
        const { emotion, confidence, blendshapeScores } = req.body
        const userId = req.user ? req.user.id : null

        if (!emotion) {
            return res.status(400).json({ message: 'Emotion is required.' })
        }

        const savedData = await expressionModule.create({
            userId,
            emotion,
            confidence: confidence || 0,
            blendshapeScores: blendshapeScores || {}
        })

        return res.status(201).json({
            message: 'Expression data saved to database successfully!',
            data: savedData
        })
    } catch (error) {
        console.error('Save expression error:', error)
        return res.status(500).json({ message: error.message || 'Error saving expression data' })
    }
}

const getExpressions = async ( req, res ) => {
    try {
        const userId = req.user ? req.user.id : null
        const filter = userId ? { userId } : {}
        const history = await expressionModule.find(filter).sort({ scannedAt: -1 }).limit(20)

        return res.status(200).json({
            message: 'Expressions fetched successfully',
            history
        })
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Error fetching expression history' })
    }
}

module.exports = { userRegistration, userLogin, getUser, userLogout, saveExpression, getExpressions }