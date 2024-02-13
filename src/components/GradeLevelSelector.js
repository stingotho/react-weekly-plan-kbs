import React from "react";

function GradeLevelSelector({ value, onChange }) {
  const gradeLevels = [
    { value: "9", label: "Grade 9" },
    { value: "10", label: "Grade 10" },
    { value: "11", label: "Grade 11" },
    { value: "12", label: "Grade 12" },
    // Add more grade levels as needed
  ];

  return (
    <select
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={onChange}
    >
      <option value="">Select a Grade Level</option>
      {gradeLevels.map((grade) => (
        <option key={grade.value} value={grade.value}>
          {grade.label}
        </option>
      ))}
    </select>
  );
}

export default GradeLevelSelector;
