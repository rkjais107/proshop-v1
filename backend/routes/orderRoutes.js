import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Create new order
// @route   POST /api/orders and GET /api/orders
// @access  Private and Private/Admin
router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.route("/myorders").get(protect, getMyOrders);

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route("/:id").get(protect, getOrderById);

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
router.route("/:id/pay").put(protect, updateOrderToPaid);

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
