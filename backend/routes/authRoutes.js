const express = require('express')
const {
	completeProfile,
	registerUser,
	verifyOtp,
	loginUser,
	registerAdmin,
	getProfile,
	updateProfile,
	getUsers,
} = require('../controllers/authController')
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware')

const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/verify-otp', verifyOtp)
authRouter.post('/completeProfile', completeProfile)

authRouter.post('/login', loginUser)
authRouter.post('/register-admin', registerAdmin)

// protected routes
authRouter.get('/me', authenticateToken, getProfile)
authRouter.put('/update-profile', authenticateToken, updateProfile)

authRouter.get('/users', authenticateToken, authorizeRoles('admin'), getUsers)

module.exports = authRouter