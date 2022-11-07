import express from "express";
const router = express.Router()
import {authUser} from '../controllers/userController.js'

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', authUser)

export default router