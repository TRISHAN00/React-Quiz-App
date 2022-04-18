import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form className={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput type="text" placeholder="Enter name" icon="person" required />
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
      />
      <Checkbox text="I agree to the Terms &amp; Conditions" required />
      <Button type="submit">
        <span>Submit now</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
