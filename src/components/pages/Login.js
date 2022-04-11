import React from "react";
import { Link } from "react-router-dom";
import loginSvg from "../../assets/images/login.svg";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration svg={loginSvg} />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>Submit Now</Button>
          <div className={classes.info}>
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
