import React from "react";

function WeekNumberInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="weekNumber">Week Number:</label>
      <input
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
