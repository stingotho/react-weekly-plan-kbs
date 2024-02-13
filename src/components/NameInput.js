import React from "react";

function NameInput({ value, onChange }) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Teacher's Name"
    />
  );
}

export default NameInput;
