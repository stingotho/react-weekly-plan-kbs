import React from "react";

function UnitDescription({ unitTitle }) {
  // Example static data for unit descriptions. In a real app, this might come from a backend API.
  const unitDescriptions = {
    "Algebra I": "Introduction to algebraic expressions and equations.",
    Geometry: "Exploring the properties of shapes and forms.",
    Biology: "Study of life and living organisms.",
    "Earth Science": "Investigating earth and its processes.",
    // Add more unit descriptions as needed
  };

  // Get the description based on the selected unit title
  const description =
    unitDescriptions[unitTitle] ||
    "Please select a unit title to see the description.";

  return (
    <div>
      <h3>Unit Description</h3>
      <p>{description}</p>
    </div>
  );
}

export default UnitDescription;
