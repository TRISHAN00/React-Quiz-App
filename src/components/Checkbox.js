import React from "react";

const Checkbox = ({agree}) => {
  return (
    <label>
      <input type="checkbox" />
      <span>{agree}</span>
    </label>
  );
};

export default Checkbox;
