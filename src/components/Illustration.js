import React from "react";
import classes from '../styles/Illustration.module.css';

const Illustration = ({children}) => {
  return (
    <div>
      <div className={classes.illustration}>
        {children}
      </div>
    </div>
  );
};

export default Illustration;
