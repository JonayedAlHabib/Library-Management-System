const {generate} = require('otp-generator')
const User = require('../models/User');
const sendOtp = require('../utils/sendOtp');
const bcrypt = require('bcryptjs')
const {v4} = require('uuid')

const registerUser = async (req, res) =>{
    try{
        const {name, email, phone, password} = req.body;
        if (!email) 
            return res.status(400).json({
        message: "Email is required"})

        const cleanPhone = phone? phone.toString().replace(/\D/g, ""): ""
        if(cleanPhone.length  !== 10){
            return res.status(400).json({
                message: "Mobile number must be exactly of 10 digits"
            })
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            if(existingUser.isVerified)
                return res.status(400).json({
            message: "User already exists"})
            await User.deleteOne({email})
        }

        const otp = generate(6, {
            upperCaseAlphabets: false, lowerCaseAlphabets: false,
            specialChars: false
        })
        
        try {
            await sendOtp(email, otp)
        } catch (emailError) {
            console.error("Error sending OTP email:", emailError)
            return res.status(500).json({
                message: "Failed to send OTP email. Please try again."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const otpExpiry = new Date(Date.now() + 5*60*1000)
        const studentId = `ST-${uuidV4().slice(0,8)}`

        const user = await User.create({
            name,
            email,
            phone: cleanPhone,
            otp,
            otpExpiry,
            studentId
        })
        res.status(201).json({
            message: "User registered successfully, OTP send to email.",user
        })

    } catch(error){
        console.error("Error registering user:", error)
        res.status(500).json({
            message: "Error registering user", error: error.message
        })
    }
}

const verifyOtp = async (req, res) =>{
    try {
        const {email, otp} = req.body
        if(!email)
            return res.status(400).json({
                message: "Email is required"
        })

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({
            message: "User not found"
        })
        if(user.otp !== otp || new Date() > new Date(user.otpExpiry)){
            return res.status(400).json({
                message: "Invalid or expire OTP"
            })
        }

        object.assign(user, {isVerified: true, otp: null, otpExpiry: null})
        await user.save()
        res.status(200).json({
            message: "OTP verify successfully"
        })
    } catch (error) {
        console.error("Error verifying OTP:", error)
        res.status(500).json({
            message: "Error verifying OTP", error: error.message
        })
    }
}

const completeProfile = async (req, res)=>{
    try {
        const {email, department, stream, semester, year, rollNo} = req.body
        if(!email) return res.status(400).json({
            message: "Email is required"
        })

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({
            message: "User not found"
        })
        if(!user.isVerified) return res.status(400).json({
            message: "User not verified"
        }) 

        object.assign(user, {department, stream, semester, year, rollNo, isProfileComplete: true})
        await user.save()
        res.status(200).json({
            message: "Profile completed successfully"
        })
    } catch (error) {
        console.error("Error completing profile:", error)
        res.status(500).json({
            message: "Error completing profile", error: error.message
        })
    }
}