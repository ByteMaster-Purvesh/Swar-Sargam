const express = require('express')
const authRouter = express.Router()
const authController = require('../controller/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')

authRouter.post("/register", authController.userRegistration)
authRouter.post("/login", authController.userLogin)
authRouter.get("/get-me", authMiddleware.authUser, authController.getUser)
authRouter.post("/logout", authMiddleware.authUser, authController.userLogout)

module.exports = authRouter