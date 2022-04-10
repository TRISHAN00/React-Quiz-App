import React from 'react';
import signupSvg from '../assets/images/signup.svg';
import classes from '../styles/Illustration.module.css';

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={signupSvg} alt="signup" />
        </div>
    );
};

export default Illustration;