import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="signin-link">
          <p>
            New to Meow Shop? <a href="Sign up"> Sign up</a>
          </p>
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Phone number/ Username/ Email"
            required
          />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">LOGIN</button>
        <div className="forgot-login">
          <a href="Forgot">Forgot Password</a>
          <a href="Login with PN">Login with phone number</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
