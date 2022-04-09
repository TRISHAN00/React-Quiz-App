import React from "react";
import svgLogin from '../assets/images/login.svg';
import classes from '../styles/Illustration.module.css';

const Illustration = () => {
  return (
    <div>
      <div className={classes.illustration}>
        <img src={svgLogin} alt="Signup" />
      </div>
    </div>
  );
};

export default Illustration;
