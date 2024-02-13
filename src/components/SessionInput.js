import React from "react";

function SessionInput({ sessionDetails, setSessionDetails }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSessionDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-6">
      {" "}
      {/* Increase space between each form group */}
      <h3 className="text-lg font-semibold text-gray-900">Session Details</h3>
      <div className="space-y-2">
        {" "}
        {/* Add vertical space between label and textarea */}
        <label
          htmlFor="objective"
          className="block text-sm font-medium text-gray-700"
        >
          Objective:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="objective"
          name="objective"
          value={sessionDetails.objective}
          rows="4" // Adjust rows as needed for size
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="activities"
          className="block text-sm font-medium text-gray-700"
        >
          Learning/Activities:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="activities"
          name="activities"
          value={sessionDetails.activities}
          rows="4"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="resources"
          className="block text-sm font-medium text-gray-700"
        >
          Resources/Materials:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="resources"
          name="resources"
          value={sessionDetails.resources}
          rows="4"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="homework"
          className="block text-sm font-medium text-gray-700"
        >
          Homework:
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="homework"
          name="homework"
          value={sessionDetails.homework}
          rows="4"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SessionInput;
