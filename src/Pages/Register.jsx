import React from "react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "../styles/Register.css";

// import {
//   signInWithPopup,
//   FacebookAuthProvider,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { authentication } from "../Firebase";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  function change() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  // const signInWithFacebook = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(authentication, provider)
  //     .then((rel) => {
  //       console.log(rel);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // const signInWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(authentication, provider)
  //     .then((rel) => {
  //       console.log(rel);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="reg-content">
      <div className="inputs">
        <h1>SignUp</h1>
        <form action="#">
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
              type="mail"
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
                <FaEye onClick={change} />
              </div>
              <label className="input-label" htmlFor="Password">
                Password
              </label>
            </div>
          </div>

          <button type="submit" className="signup">
            Signup
          </button>
        </form>
        <div className="or">OR</div>

        <div className="icons">
          <div className="google">
            <FaGoogle />
          </div>
          <div className="facebook">
            <FaFacebookF />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
