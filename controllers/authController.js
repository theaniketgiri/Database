const User = require('../models/userModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../utils/jwtUtils');

const registerUser = async (req, res) => {  
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        
        return res.status(201).json({
            success: true,
            msg: 'Registration successful!',
            data: userData
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, password } = req.body;
        const userData = await User.findOne({ email });
        
        if (!userData) {
            return res.status(400).json({
                success: false,
                msg: 'Invalid credentials'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, userData.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                msg: 'Invalid credentials'
            });
        }

        const accessToken = generateAccessToken({ user: userData });
        return res.status(200).json({
            success: true,
            msg: 'Login successful',
            accessToken: accessToken,
            tokenType: 'Bearer',
            data: userData
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message
        });
    }
}

module.exports = {
    registerUser,
    loginUser
};
