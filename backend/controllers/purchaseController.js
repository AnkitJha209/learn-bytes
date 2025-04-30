import mongoose from "mongoose";
import { Course } from "../models/course.model.js";
import { User } from "../models/user.model.js";
import { sendMail } from "../utils/mailSender.js";

export const purchaseCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        const userId = req.user.id;
        if (!courseId || !userId) {
            return res.status(500).json({
                success: false,
                msg: "All Fields are neccessary",
            });
        }
        let course = await Course.findById(courseId);
        if (!course) {
            return res.status(500).json({
                success: false,
                msg: "Could not find Course",
            });
        }
        let user = await User.findById(userId);
        if (!user) {
            return res.status(500).json({
                success: false,
                msg: "Could not find User",
            });
        }
        const uId = new mongoose.Types.ObjectId(userId);
        if (course.studentsEnrolled.includes(uId)) {
            return res.status(500).json({
                success: false,
                msg: "Student is already Enrolled",
            });
        }
        const enrolledCourse = await Course.findByIdAndUpdate(
            { courseId },
            { $push: { studentsEnrolled: userId } },
            { new: true }
        )
            .populate("studentsEnrolled")
            .exec();

        const userCourses = await User.findByIdAndUpdate(
            { userId },
            { $push: { courses: courseId } },
            { new: true }
        )
            .populate("courses")
            .exec();

        sendMail({
            to: user.email,
            subject: "Course Enrolled",
            text: `You have successfully enrolled in the course ${course.title}`,
        });

        return res.status(200).json({
            success: true,
            msg: "Student is successfully Enrolled in a Course",
            userCourses,
            enrolledCourse,
        });
    } catch (error) {
        console.error("Error in purchaseCourse:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
