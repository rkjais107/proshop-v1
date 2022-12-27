import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Register a new user
// @route   POST /api/users and GET /api/users
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

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
router.route("/:id").delete(protect, admin, deleteUser);
export default router;
