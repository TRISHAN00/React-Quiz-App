import React from 'react';

const Account = () => {
    return (
        <div>
            <div className="account">
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="signup.html">Signup</a>
          <span className="material-icons-outlined" title="Logout">
            {" "}
            logout{" "}
          </span>
        </div>
        </div>
    );
};

export default Account;