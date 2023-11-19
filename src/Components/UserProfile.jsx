import React, { useEffect, useState } from "react";
import { auth } from "../Config/Firebase";
import { getDatabase, ref, get } from "firebase/database";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get the currently authenticated user
    const user = auth.currentUser;

    if (user) {
      // Reference to the Realtime Database
      const db = getDatabase();

      // Reference to the user's data using their UID
      const userRef = ref(db, `users/${user.uid}`);

      // Fetch the user's data from the database
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Data found, set it to the state
            setUserData(snapshot.val());
          } else {
            // Data not found
            console.log("User data not found.");
            alert("User data not found");
          }
        })
        .catch((error) => {
          console.error("Error getting user data:", error);
        });
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {userData ? (
        <div>
          <p className="font-semibold">Name: {userData.username}</p>
          <p className="font-semibold">Email: {userData.email}</p>
          {/* Add more user data fields here */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
