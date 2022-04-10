import React from "react";
import classes from "../../styles/Signup.module.css";
import Form from "../Form";
import Illustration from "../Illustration";

const Signup = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
            
        </Form>
      </div>
    </div>
  );
};

export default Signup;
