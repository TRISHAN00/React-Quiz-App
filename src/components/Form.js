import React from 'react';

const Form = ({children, className, ...rest}) => {
    return (
        <form className={`${className} ...rest`}>
            <h2>form</h2>
        </form>
    );
};

export default Form;