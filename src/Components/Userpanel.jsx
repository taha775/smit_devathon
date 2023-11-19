import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../Config/Firebase";
import UserProfile from "../Components/UserProfile";
import img from "../Images/myhero.jpg";

const Userpanel = () => {
  const Images = [{}];
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Define references to the "courses" and "users" in the Firebase database
    const coursesRef = ref(db, "courses");
    const userRef = ref(db, "users/userId"); // Replace "userId" with the user's unique identifier

    // Set up a listener for changes in the "courses" data
    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const courseData = snapshot.val();
        const courseArray = Object.values(courseData); // Convert the data to an array
        setCourses(courseArray);
      }
    };

    // Set up a listener for changes in the "user" data
    const onUserDetailsChange = (snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUserDetails(userData);
      }
    };

    // Attach the listeners to the references
    const coursesListener = onValue(coursesRef, onDataChange);
    const userListener = onValue(userRef, onUserDetailsChange);

    return () => {
      // Clean up the listeners when the component unmounts
      coursesListener();
      userListener();
    };
  }, []);

  // Function to handle course selection
  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  // Function to clear the selected course
  const clearSelectedCourse = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="container mx-auto p-4">
      <UserProfile />
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>

      {selectedCourse ? (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-semibold">
            {selectedCourse.courseName}
          </h2>
          <p className="text-gray-600 mb-2">
            Duration: {selectedCourse.courseDuration}
          </p>
          <p className="text-gray-600">Type: {selectedCourse.courseType}</p>
          <button
            onClick={clearSelectedCourse}
            className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Deselect
          </button>
        </div>
      ) : null}

      <h1 className="text-3xl font-bold my-8"> Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.courseID}
            className="bg-blue-100 rounded-lg shadow-md"
          >
            <img
              src={img} // Assuming 'img' holds the image URL
              alt={course.courseName}
              className="w-full h-32 object-cover object-center rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.courseName}</h2>
              <p className="text-gray-600 mb-2">
                Duration: {course.courseDuration}
              </p>
              <p className="text-gray-600">Type: {course.courseType}</p>
              <button
                onClick={() => handleSelectCourse(course)}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userpanel;
