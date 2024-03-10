import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: this.email };

    axios
      .post("forgot", data)
      .then((res) => {
        console.log(res);
      })
      .catch(
        err => {
        console.log(err);
      });
  };

  return (
    <div className="login-content">
      <div className="inputs">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              className="username"
              type="email"
              name="Mail"
              placeholder=""
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="input-label" htmlFor="Mail">
              Mail
            </label>
          </div>

          <button type="submit" className="signup">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
