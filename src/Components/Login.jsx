import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Config/Firebase";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const databaseRef = ref(db, `users/${user.uid}`);

      get(databaseRef)
        .then((snapshot) => {
          const data = snapshot.val();
          if (data == null) {
            const databaseRef = ref(db, `admins/${user.uid}`);
            get(databaseRef)
              .then((snapshot) => {
                const data = snapshot.val();
                toast.success("Login successful!");
                navigate("/admins");
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
                toast.error("Error fetching data");
              });
          } else {
            navigate("/users");
            toast.success("Login successful!");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          toast.error("Error fetching data");
        });
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login error");
    }
  };

  return (
    <div className="min-h-screen  login flex items-center justify-center bg-blue-600">
      <div className="bg-blue-300 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl  ml-28 font-semibold mb-4">LOGIN </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-black px-4 py-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-black px-4 py-2 border rounded mb-6"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
