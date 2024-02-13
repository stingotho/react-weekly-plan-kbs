import React from "react";

function WeekNumberInput({ value, onChange }) {
  return (
    <div>
      {/* <label htmlFor="weekNumber">Week Number:</label> */}
      <input
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        id="weekNumber"
        name="weekNumber"
        value={value}
        onChange={onChange}
        min="1" // Optionally set a minimum value
        // max="52" // Optionally set a maximum value if it makes sense for your context
        placeholder="Enter week number"
      />
    </div>
  );
}

export default WeekNumberInput;
