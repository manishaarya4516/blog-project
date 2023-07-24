import React, { useState } from "react";
import { RegisterStyle } from "./registerstyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSwitch = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    e.preventDefault();
    axios.post("http://localhost:5002/auth/register", formData, {
      headers: { "Content-Type": "application/json" },
    });
    try {
      alert("registration successful");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RegisterStyle>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      {/* <button className="registerLoginButton">Login</button> */}
      <p>
        already if you have account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", fontSize: "20px" }}
          onClick={handleSwitch}
        >
          {" "}
          login
        </span>{" "}
      </p>
    </RegisterStyle>
  );
};
