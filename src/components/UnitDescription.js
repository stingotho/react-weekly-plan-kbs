// UnitDescription.js
import React from "react";

function UnitDescription({ description }) {
  return (
    <div>
      <h3 className="text-md font-semibold text-gray-900">Unit Description</h3>
      <p>{description}</p>
    </div>
  );
}

export default UnitDescription;
