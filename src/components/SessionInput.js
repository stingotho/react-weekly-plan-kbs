import React from "react";

function SessionInput({ sessionIndex, sessionDetails, updateSession }) {
  // Handle changes for each input field within a session
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Call updateSession from the parent component, passing the sessionIndex, field name, and new value
    updateSession(sessionIndex, name, value);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Session Details #{sessionIndex + 1}
      </h3>
      <div className="space-y-2">
        <label
          htmlFor={`objective-${sessionIndex}`}
          className="block text-sm font-medium text-gray-700"
        >
          Objective:
        </label>
        <textarea
          id={`objective-${sessionIndex}`}
          name="objective"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sessionDetails.objective}
          rows="4"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor={`activities-${sessionIndex}`}
          className="block text-sm font-medium text-gray-700"
        >
          Learning/Activities:
        </label>
        <textarea
          id={`activities-${sessionIndex}`}
          name="activities"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sessionDetails.activities}
          rows="4"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor={`resources-${sessionIndex}`}
          className="block text-sm font-medium text-gray-700"
        >
          Resources/Materials:
        </label>
        <textarea
          id={`resources-${sessionIndex}`}
          name="resources"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sessionDetails.resources}
          rows="4"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor={`homework-${sessionIndex}`}
          className="block text-sm font-medium text-gray-700"
        >
          Homework:
        </label>
        <textarea
          id={`homework-${sessionIndex}`}
          name="homework"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sessionDetails.homework}
          rows="4"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SessionInput;
