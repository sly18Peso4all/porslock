import React from "react";

const SignUp = () => {
  return (
    <div className="email-container">
      <div className="email-content">
        <h1>Get Access to Exclusive offers</h1>
        <p>
          Sign up for your newsletter below to get 20% off on your first Visit
          to our hotel.
        </p>
        <form action="#">
          <div className="form-wrap">
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" />
            </label>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
