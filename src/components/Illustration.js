import React from 'react';
import classes from '../styles/Illustration.module.css';

const Illustration = ({svg}) => {
    return (
        <div className={classes.illustration}>
            <img src={svg} alt="signup" />
        </div>
    );
};

export default Illustration;