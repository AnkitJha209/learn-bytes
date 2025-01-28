import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetails } from "../services/operations/courseAPI";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const CoursePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth)
  
  const handleAddToCart = (e) => {
    e.stopPropagation()
    if(!token){
        toast.error('Please Login First')
        navigate('/log-in')
        return
    }
    dispatch(addToCart(course))
}

  // Dispatch action to fetch course details on mount
  useEffect(() => {
    dispatch(getCourseDetails(id));
  }, [id, dispatch]);

  // Access course details from the store
  const { courseDetails, loading, error } = useSelector(
    (state) => state.course
  );

  // Loading and error handling
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If courseDetails is undefined, handle this case as well
  if (!courseDetails) {
    return <div>Course details not available</div>;
  }

  const course = courseDetails;

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-emerald-900 to-green-900 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-300 text-black shadow-lg rounded-lg overflow-hidden">
          {/* Left Side Content */}
          <div className="md:col-span-2">
            {/* Course Thumbnail */}
            <img
              src={course.thumbnail}
              alt={course.courseName}
              className="w-full h-64 object-cover rounded-br-xl"
            />

            {/* Course Details */}
            <div className="p-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">
                {course.courseName}
              </h1>
              <p className="text-gray-700 mb-4">{course.courseDesc}</p>

              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                What You'll Learn
              </h2>
              <p className="text-gray-700 mb-6">{course.whatYouWillLearn}</p>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Instructor
                </h2>
                {course.instructor ? (
                  <div>
                    <p className="text-gray-700">
                      {course.instructor.firstName} {course.instructor.lastName}
                    </p>
                    <p className="text-gray-700">
                      Email: {course.instructor.email}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700">
                    Instructor information not available
                  </p>
                )}
              </div>
            </div>

            {/* Course Content Section */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Course Content
              </h2>
              <div className="space-y-4">
                {course.content &&
                  course.content.map((lecture, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">
                        {lecture.title}
                      </h3>
                      <p className="text-gray-700">
                        {lecture.lecturesCount} lecture(s)
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Course Price
              </h3>
              <p className="text-2xl font-bold text-green-600">
                Rs. {course.price}
              </p>
            </div>
            <button className="w-full bg-yellow-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-yellow-500">
              Buy Now
            </button>
            <button
              onClick={(e)=> handleAddToCart(e)}
              className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>

            <hr className="my-6" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Students Enrolled
              </h3>
              <p className="text-gray-500">
                {course.studentsEnrolled?.length || 0} students
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Course Rating
              </h3>
              <p className="text-gray-500">4.5/5 (200 reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
