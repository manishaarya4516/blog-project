import { useState } from "react";
import { LoginStyle } from "../login/loginstyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSwitch = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    e.preventDefault();

    axios
      .post("http://localhost:5002/api/user/login", formData,{
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data ===  res.user) {
          console.log("logged");
          alert("login success");
          navigate("/home");
        } else if (res.data === "not exist") {
          alert("not valid");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginStyle>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton">Login</button>
      </form>
      {/* <button className="loginRegisterButton">Register</button> */}
      <p>
        Don't have an account?
        <span
          style={{ color: "blue", cursor: "pointer", fontSize: "20px" }}
          onClick={handleSwitch}
        >
          {"  "}
          Register
        </span>
      </p>
    </LoginStyle>
  );
};
