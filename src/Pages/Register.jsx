import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye } from "react-icons/fa";
import "../styles/Register.css";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const displayName = e.target.UserName.value;
    const email = e.target.Mail.value;
    const password = e.target.Password.value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(res.user, {
        displayName,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      navigate("/");
    } catch (err) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="reg-content">
      <div className="inputs">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              name="UserName"
              placeholder=""
              autoComplete="off"
              required
            />
            <span></span>
            <label htmlFor="UserName">UserName</label>
          </div>

          <div className="form-input">
            <input
              className="username"
              type="email"
              name="Mail"
              placeholder=""
              autoComplete="off"
              required
            />
            <span></span>
            <label htmlFor="Mail">Mail</label>
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
                <FaEye onClick={togglePasswordVisibility} />
              </div>
              <label className="input-label" htmlFor="Password">
                Password
              </label>
            </div>
          </div>

          <button type="submit" className="signup" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <div className="or">OR</div>

        <div className="icons">
          <div className="google" onClick={handleGoogleSignup}>
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

export default Register;
