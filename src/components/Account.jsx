import React from "react";

export default function Account() {
  return (
    <div class="account">
      <span class="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      <span class="material-icons-outlined" title="Logout">
        {" "}
        logout{" "}
      </span>
    </div>
  );
}
