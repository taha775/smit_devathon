import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../Config/Firebase";
import { FaSpinner } from "react-icons/fa"; // Import the loading spinner icon
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user"); // Initialize role as "user"
  const [loading, setLoading] = useState(false); // Track loading state

  const handleSignup = async () => {
    try {
      setLoading(true); // Start loading

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Determine the database reference based on the selected role
      const userRole = role === "admin" ? "admins" : "users";
      const userRef = ref(db, `${userRole}/${user.uid}`);

      const userData = {
        username: username,
        email: user.email,
        uid: user.uid,
        role: role, // Include the role in the user data
      };

      set(userRef, userData).then(() => {
        toast.success("User Signup  successful!");
        console.log("User signed up:", user);
        setLoading(false); // Stop loading
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("error while singing up ");
      setLoading(false); // Stop loading in case of an error
    }
  };

  return (
    <div className="signUp bg-blue-300 font-serif text-black min-h-screen flex items-center justify-center">
      <div className="  p-8  bg-blue-600 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded border text-black border-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Role:</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="user"
                checked={role === "user"}
                onChange={() => setRole("user")}
                className="text-blue-500"
              />{" "}
              User
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                value="admin"
                checked={role === "admin"}
                onChange={() => setRole("admin")}
                className="text-blue-500"
              />{" "}
              Admin
            </label>
          </div>
        </div>
        <button
          onClick={handleSignup}
          className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Signup;
