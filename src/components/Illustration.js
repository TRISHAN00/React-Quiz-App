import React from "react";
import svg from '../assets/images/signup.svg';
import classes from '../styles/Illustration.module.css';

const Illustration = () => {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={svg} alt="Signup" />
      </div>
    </div>
  );
};

export default Illustration;
