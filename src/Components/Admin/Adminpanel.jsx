import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../Config/Firebase";
import { ref, onValue, remove, push, set } from "firebase/database";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";

const Adminpanel = () => {
  let navigation = useNavigate();
  const [courses, setCourses] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseType, setCourseType] = useState("");

  const handleEditClick = (courseID) => {
    navigation(`/Edit_course/${courseID}`); // Navigate to the "Edit" component with the course ID as a parameter
  };

  useEffect(() => {
    const coursesRef = ref(db, "courses");

    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const courseData = snapshot.val();
        const courseArray = Object.entries(courseData).map(
          ([courseID, course]) => ({
            courseID,
            ...course,
          })
        );
        console.log(courseArray);
        setCourses(courseArray);
      }
    };

    const databaseListener = onValue(coursesRef, onDataChange);

    return () => {
      databaseListener();
    };
  }, []);

  const addCourse = () => {
    if (
      courseID.trim() === "" ||
      courseName.trim() === "" ||
      courseDuration.trim() === "" ||
      courseType.trim() === ""
    ) {
      toast.error("All fields are required");
    } else {
      const newCourse = {
        courseID,
        courseName,
        courseDuration,
        courseType,
      };

      const coursesRef = ref(db, "courses");
      const newCourseRef = push(coursesRef);

      set(newCourseRef, newCourse)
        .then(() => {
          toast.success("Course added successfully");
          setCourseID("");
          setCourseName("");
          setCourseDuration("");
          setCourseType("");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

const onDelete = (courseID) => {
  if (window.confirm("Are you sure you want to delete this course?")) {
    const courseRef = ref(db, `courses/${courseID}`);

    remove(courseRef)
      .then(() => {
        toast.success("Course deleted successfully");
      })
      .catch((error) => {
        toast.error(`Error deleting course: ${error.message}`);
      });
  }
};

  return (
    <div className="p-8">
      <div className="mb-4 p-4 bg-blue-100 rounded-md">
        <h2 className="text-2xl font-semibold">Manage Courses</h2>
      </div>
      <div className="p-4 bg-white rounded-md shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course ID"
            value={courseID}
            onChange={(e) => setCourseID(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course Duration"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course Type"
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          onClick={addCourse}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Course
        </button>
      </div>
      <table className="w-full mt-8 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-blue-500 text-white font-semibold uppercase text-sm">
              #
            </th>
            <th className="py-2 px-4 bg-blue-500 text-white font-semibold uppercase text-sm">
              Course ID
            </th>
            <th className="py-2 px-4 bg-blue-500 text-white font-semibold uppercase text-sm">
              Course Name
            </th>
            <th className="py-2 px-4 bg-blue-500 text-white font-semibold uppercase text-sm">
              Course Duration
            </th>
            <th className="py-2 px-4 bg-blue-500 text-white font-semibold uppercase text-sm">
              Course Type
            </th>
            <th className="py-2 px-4 bg-blue-500 text-white font-semibold uppercase text-sm">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.courseID}>
              <td className="border py-2 px-4 text-sm">{index + 1}</td>
              <td className="border py-2 px-4 text-sm">{course.courseID}</td>
              <td className="border py-2 px-4 text-sm">{course.courseName}</td>
              <td className="border py-2 px-4 text-sm">
                {course.courseDuration}
              </td>
              <td className="border py-2 px-4 text-sm">{course.courseType}</td>
              <td className="border py-2 px-4 text-sm">
                <button
                  onClick={() => handleEditClick(course.courseID)} // Use the handleEditClick function
                  className="mr-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(course.courseID)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Adminpanel;
