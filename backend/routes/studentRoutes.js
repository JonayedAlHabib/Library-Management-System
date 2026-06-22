const express = require('express')
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware')
const {searchStudentByRoll} = require('../controllers/studentController')


const studentRouter = express.Router()

studentRouter.get("/search-by-roll", authenticateToken, authorizeRoles("admin"), searchStudentByRoll)

module.exports = studentRouter