import React from "react";

function NameInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Teacher's Name"
    />
  );
}

export default NameInput;
