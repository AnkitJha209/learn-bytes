import express from "express";
import { auth, isStudent } from "../middlewares/authorization.js";
import { purchaseCourse } from "../controllers/purchaseController.js";

export const paymentRoutes = express.Router()

paymentRoutes.post("/purchase-course",auth, isStudent , purchaseCourse)