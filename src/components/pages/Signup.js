import React from "react";
import signupSvg from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

const Signup = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration svg={signupSvg} />
        <SignupForm/>
      </div>
    </div>
  );
};

export default Signup;
