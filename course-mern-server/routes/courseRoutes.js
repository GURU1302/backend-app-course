import express from "express";
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";


const router = express.Router();

//get all courses without lectures

router.route("/courses").get(getAllCourses);

//for creating course

router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload , createCourse);

//add lecture
router
.route("/course/:id")
.get(isAuthenticated, authorizeSubscribers , getCourseLectures)
.post(isAuthenticated, authorizeAdmin, singleUpload, addLectures)
.delete(isAuthenticated, authorizeAdmin, deleteCourse);

//delete lecture
router.route("/lecture")
.delete(isAuthenticated, authorizeAdmin, deleteLecture);




export default router;