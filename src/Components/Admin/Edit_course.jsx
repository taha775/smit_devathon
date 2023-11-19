import React, { useEffect, useState } from "react";
import { ref, onValue, remove, push, set } from "firebase/database";
import { db } from "../../Config/Firebase";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

const Adminpanel = () => {
  const [courses, setCourses] = useState([]);
  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseType, setCourseType] = useState("");

  const [keynew, setkeynew] = useState();

  let param = useParams();

  useEffect(() => {
    console.log(param);
    const coursesRef = ref(db, "courses");

    const onDataChange = (snapshot) => {
      if (snapshot.exists()) {
        const courseData = snapshot.val();
        console.log(courseData);

        var key = Object.keys(courseData);
        console.log(key);
        for (var i = 0; i < courseData.length; i++) {}
        const courseArray = Object.entries(courseData).map(
          ([courseID, course]) => ({
            courseID,
            ...course,
          })
        );
        var getdata = [];
        for (var i = 0; i < courseArray.length; i++) {
          if (courseArray[i]["courseID"] == param.id) {
            getdata.push(courseArray[i]);
            setkeynew(key[i]);
          }
        }
        console.log(keynew);
        setCourses(getdata);
      }
    };

    const databaseListener = onValue(coursesRef, onDataChange);

    return () => {
      databaseListener();
    };
  }, []);

  const addCourse = () => {
    console.log(courseID);
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

      const coursesRef = ref(db, `courses/${keynew}`);

      set(coursesRef, newCourse)
        .then(() => {
          toast.success("Course update successfully");
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

  const onDelete = (courseKey) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const courseRef = ref(db, `courses/${courseKey}`);

      remove(courseRef)
        .then(() => {
          toast.success("Course deleted successfully");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div className="p-8">
      <div className="mb-4 p-4 bg-blue-100 rounded-md">
        <h2 className="text-2xl font-semibold">Manage 123 Courses</h2>
      </div>
      {keynew}
      {courses.length > 0 ? (
        <div className="p-4 bg-white rounded-md shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Course ID"
              value={courses[0].courseID}
              disabled={true}
              onChange={(e) => setCourseID(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Course Name"
              value={courses[0].courseName}
              //   value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Course Duration"
              value={courses[0].courseDuration}
              //   value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Course Type"
              //   value={courseType}
              value={courses[0].courseType}
              onChange={(e) => setCourseType(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
            />
          </div>
          <button
            onClick={addCourse}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            update Course
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Adminpanel;
