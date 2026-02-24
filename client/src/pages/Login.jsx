import React from "react";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <header>
          <h1>Sign in to start solving</h1>
          <p>Welcome back! Please enter your details</p>
        </header>
        <form className="login-form">
          <div className="field-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@company.com"
            />
          </div>

          <div className="field-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="/forgot-password">forgot-password</a>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
              />
            </div>
            <button type="submit">Sign In</button>
          </div>
        </form>

        <footer>
          <span>
            Dont have an account ? <a href="/signup">Sign up</a>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Login;
