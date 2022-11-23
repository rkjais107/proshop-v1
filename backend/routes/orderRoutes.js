import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.route("/").post(protect, addOrderItems);

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.route("/myorders").get(protect, getMyOrders);

// @desc    Get order by ID
// @route   POST /api/orders/:id
// @access  Private
router.route("/:id").get(protect, getOrderById);

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
