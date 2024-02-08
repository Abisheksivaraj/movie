import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../styles/Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  function change() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  return (
    <div className="login-content">
      <div className="inputs">
        <h1>Login</h1>
        <form action="#">
          <div className="form-input">
            <input
              className="username"
              type="mail"
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
            <a href="">Forget Password?</a>
          </div>

          <NavLink type="submit" className="signup" to={"/home"}>
            Login
          </NavLink>
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

export default Login;
