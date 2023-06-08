import express from 'express';
import { buySubscription, cancelSubscription, getRazorpayKey, paymentVerification } from '../controllers/paymentController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();


//Buy Subscription
router.route("/subscribe").get(isAuthenticated,buySubscription)

//Verify payment and add reference
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//Get Razorpay Key
router.route("/razorpaykey").get(getRazorpayKey);

//cancel Subscription
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription)





export default router;