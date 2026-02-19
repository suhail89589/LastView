import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <form className="login-form">
            <h4>Sign in to start solving</h4>
            <input type="email" name="@example.com"></input>
            <input type="text" name="password"></input>
            <button className="btn"></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
