import React from "react";

function SubjectSelector({ value, onChange, subjects }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Select a subject</option>
      {subjects.map((subject) => (
        <option key={subject.value} value={subject.value}>
          {subject.label}
        </option>
      ))}
    </select>
  );
}

export default SubjectSelector;
