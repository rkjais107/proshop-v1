import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
router.route("/").post(registerUser).get(protect, admin, getUsers);

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
router.post("/login", authUser);

// @desc    Get user profile and update user profile
// @route   GET /api/users/profile and PUT /api/users/profile
// @access  Private
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
