const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authenticationToken = async (req, res, next) =>{
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]

        if(!token){
            return res.status(401).json({
                message: "No token provided, authentication denied"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id).select("-password")

        if(!user){
            return res.status(401).json({
                message: "Token is not valid or user no longer exists"
            })
        }
        req.user = user
        next()
    } catch (error) {
        console.error("JWT auth error: ", error)
        return res.status(401).json({
            message: "Token is not valid"
        })
    }
}


const authorizedRoles = (...roles) =>{
    return (req, res, next) =>{
        if(!req.user || !roles.includes(req.user.role)){
            return res.status(403).json({
                message: "Access Forbiddent"
            })
        }
        next()
    }
}

module.exports = {
  authenticateToken: authenticationToken,
  authorizeRoles: authorizedRoles,
}