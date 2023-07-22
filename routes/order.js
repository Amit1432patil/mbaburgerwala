import express from "express";
import { autherizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { getAdminOrders, getMyOrders, getOrderDetails, paymentVarification, placeOrder, placeOrderOnline, proccessOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/createorder",isAuthenticated,placeOrder);

router.post("/createorderonline",isAuthenticated,placeOrderOnline);

router.post("/paymentverification",isAuthenticated,paymentVarification);

router.get("/myOrders",isAuthenticated,getMyOrders);

router.get("/order/:id", isAuthenticated,getOrderDetails);

// Add Admin Middleware
router.get("/admin/orders", isAuthenticated,autherizeAdmin,getAdminOrders);

router.get("/admin/order/:id", isAuthenticated,autherizeAdmin,proccessOrder);

router.get("/admin/stats",isAuthenticated,autherizeAdmin);

export default router;

