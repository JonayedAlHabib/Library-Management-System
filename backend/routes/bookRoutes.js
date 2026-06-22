const express = require('express')
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware')
const {
	getFineSettings,
	getStudentIssues,
	getIssues,
	issueManualBooks,
	returnBook,
	applyFine,
	clearFine,
	updateFineSettings,
} = require('../controllers/bookController')


const bookRouter = express.Router()

bookRouter.get("/fine-settings", authenticateToken, getFineSettings)
bookRouter.get("/issue/student", authenticateToken, authorizeRoles("user"), getStudentIssues)

bookRouter.get("/issues", authenticateToken, authorizeRoles("admin"), getIssues)
bookRouter.post("/issue-manual", authenticateToken, authorizeRoles("admin"), issueManualBooks)

bookRouter.put("/issues/:id/return", authenticateToken, authorizeRoles("admin"), returnBook)
bookRouter.put("/issues/:id/fine", authenticateToken, authorizeRoles("admin"), applyFine)

bookRouter.put("/issues/:id/clear-fine", authenticateToken, authorizeRoles("admin"), clearFine)
bookRouter.put("/fine-settings", authenticateToken, authorizeRoles("admin"), updateFineSettings)


module.exports = bookRouter