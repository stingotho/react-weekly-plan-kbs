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
    <div className="space-y-4">
      <h3 className="text-md font-semibold text-gray-900">Session Details</h3>
      <div className="flex items-center space-x-4">
        <label htmlFor="objective" className="flex-1 text-right mr-4">
          Objective:
        </label>
        <textarea
          className="flex-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="objective"
          name="objective"
          value={sessionDetails.objective}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="activities" className="flex-1 text-right mr-4">
          Learning/Activities:
        </label>
        <textarea
          className="flex-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="activities"
          name="activities"
          value={sessionDetails.activities}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="resources" className="flex-1 text-right mr-4">
          Resources/Materials:
        </label>
        <textarea
          className="flex-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="resources"
          name="resources"
          value={sessionDetails.resources}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center space-x-4">
        <label htmlFor="homework" className="flex-1 text-right mr-4">
          Homework:
        </label>
        <textarea
          className="flex-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="homework"
          name="homework"
          value={sessionDetails.homework}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SessionInput;
