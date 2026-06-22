const {generate} = require('otp-generator')
const User = require('../models/User');
const sendOtp = require('../utils/sendOtp');
const bcrypt = require('bcryptjs')
const {v4} = require('uuid')
const jwt = require('jsonwebtoken')

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


const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            })
        }
        const user = await User.findOne({email})
        if(!user.isVerified){
            return res.status(403).json({
                success: false,
                message: "Please verify your email with OTP before login in."
            })
        }

        if(!(await bcrypt.compare(password, user.password))){
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '7d'})
        const {password: _, ...userResponse} = user.toObject()

        res.status(200).json({
            success: true,
            token,
            user: userResponse
        })
    } catch (error) {
        console.error("Error during login")
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getProfile = async (req, res)=>{
    try {
        const user = await User.findOne(req.user.id).select("-password")
        if(!user) return res.status(404).json({
            message: "User not found"
        })

        res.status(200).json({
            success: true, user
        })
    } catch (error) {
        console.error("Error fetching user profile", error)
        res.status(500).json({
            message: "Error fetching user profile"
        })
    }
}


const updateProfile= async (req, res) =>{
  try {
    const { name, email, phone, department, stream, semester, academicYear, rollNumber } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (email) {
      const normalizedEmail = email.trim().toLowerCase();
      if (normalizedEmail !== user.email.toLowerCase()) {
        if (user.role === "user") {
          return res.status(400).json({ message: "Students are not allowed to change their email address" });
        }
        if (await User.findOne({ email: normalizedEmail, _id: { $ne: user._id } })) {
          return res.status(400).json({ message: "Email already in use" });
        }
        user.email = normalizedEmail;
      }
    }
    if (phone) {
      const cleanPhone = phone.toString().replace(/\D/g, "");
      if (cleanPhone.length !== 10) {
        return res.status(400).json({ message: "Mobile number must be exactly 10 digits" });
      }
      user.phone = cleanPhone;
    }

    if (name) user.name = name;
    if (department) user.department = department;
    if (stream) user.stream = stream;
    if (semester) user.semester = semester;
    if (academicYear) user.year = academicYear;
    if (rollNumber) user.rollNo = rollNumber;

    await user.save();
    res.status(200).json({ success: true, message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }
}

const getUser = async (req, res)=>{
    try {
        const user = await User.find({role:"user", isVerified: true, isProfileComplete: true})
        res.status(200).json({
            success: true, user
        })
    } catch (error) {
        console.error("Error fetching students", error)
        res.status(500).json({
            message: "Error fetching students", error: error.message
        })
    }
}


const registerAdmin = async (req, res)=>{
    try {
        const {name, email, phone, password} = req.body
        if(!name || !email || !phone || !password){
            return res.status(400).json({
                message: "Please enter al required fields"
            })
        }

        if(await User.findOne({email})){
            return res.status(400).json({
                message: "User already exists with this email"
            })
        }

        const hashedPassword = await bcrypt.hash(password)
        const user = await User.create({
            name,
            email: email.trim().toLowerCase(),
            phone,
            password: hashedPassword,
            role: "admin",
            isVerified: true
        })

        const {password: _, ...userResponse}= user.toObject()
        res.status(200).json({
            success: true,
            message: "Admin registered successfully",
            user: userResponse
        })
    } catch (error) {
        console.error("Error registering admin", error)
        res.status(500).json({
            message: "Error registering admin", error: error.message
        })
    }
}

module.exports = {
    registerUser,
    verifyOtp,
    completeProfile,
    loginUser,
    getProfile,
    updateProfile,
    getUsers: getUser,
    registerAdmin,
}