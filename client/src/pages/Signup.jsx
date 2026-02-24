import React from "react";

const Signup = () => {
  return (
    <>
      <div className="Signup-wrapper">
        <div className="Signup-card">
          <header>
            <h1>Sign up to start solving</h1>
            <p>Lets start solving , please enter your details</p>
          </header>

          <form className="signup-form">
            <div className="field-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="name" name="name" placeholder="name" />
            </div>
            <div className="field-group-1">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="email" />
            </div>
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="******"
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>
          <footer>
            <span>
              Already have an account? <a href="/signin"></a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Signup;
