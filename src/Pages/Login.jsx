import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { auth, db } from "../Firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const change = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.Mail.value;
    const password = e.target.Password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or show success message
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect or show success message
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Redirect or show success message
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <div className="login-content">
      <div className="inputs">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-input">
            <input
              className="username"
              type="email"
              name="Mail"
              placeholder=""
              autoComplete="off"
              required
            />
            <label className="input-label" htmlFor="Mail">
              Mail
            </label>
          </div>

          <div className="form-input input-2">
            <div className="pass">
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                placeholder=""
                name="Password"
                autoComplete="off"
                required
              />
              <div className="eye">
                <FaEye onClick={change} />
              </div>
              <label className="input-label" htmlFor="Password">
                Password
              </label>
            </div>
          </div>
          <div className="forget">
            <Link to={"/Forgot"}>
              <a href="">Forget Password?</a>
            </Link>
          </div>

          <button type="submit" className="signup">
            Login
          </button>
        </form>

        <div className="or">OR</div>

        <div className="icons">
          <div className="google" onClick={handleGoogleLogin}>
            <FaGoogle />
          </div>
          <div className="facebook" onClick={handleFacebookLogin}>
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
