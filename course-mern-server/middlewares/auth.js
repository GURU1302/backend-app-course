import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";

export const isAuthenticated =catchAsyncError(async (req,res,next)=>{
    const {token} =req.cookies;

    if(!token) return next(new ErrorHandler("Not Logged In",401));

    const decoded=jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);

    next();
})
export const authorizeAdmin =catchAsyncError((req,res,next)=>{
    

    if(req.user.role!=="admin") 
    return 
    next(new ErrorHandler(`${req.user.role} is not allowed to access this resource` ,404));

    next();
})


export const authorizeSubscribers =catchAsyncError((req,res,next)=>{
    

    if(req.user.role!=="admin" && req.user.subscription.id !== "active") 
    return 
    next(new ErrorHandler("Only subscribers are allowed to access this resource" ,404));

    next();
})