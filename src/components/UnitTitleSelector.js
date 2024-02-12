import React from "react";

function UnitTitleSelector({ value, onChange, gradeLevel, subject }) {
  // Example static data mapping. You might replace this with dynamic data fetching based on `gradeLevel` and `subject`
  const unitTitlesByGradeAndSubject = {
    9: {
      math: ["Algebra I", "Geometry"],
      science: ["Biology", "Earth Science"],
    },
    10: {
      math: ["Algebra II", "Trigonometry"],
      science: ["Chemistry", "Physics"],
    },
    // Add more mappings as needed
  };

  // Determine unit titles based on the selected grade level and subject
  const unitTitles =
    gradeLevel && subject
      ? unitTitlesByGradeAndSubject[gradeLevel][subject] || []
      : [];

  return (
    <select value={value} onChange={onChange}>
      <option value="">Select a Unit Title</option>
      {unitTitles.map((title, index) => (
        <option key={index} value={title}>
          {title}
        </option>
      ))}
    </select>
  );
}

export default UnitTitleSelector;
