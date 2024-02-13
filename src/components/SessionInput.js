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
    <div>
      <h3>Session Details</h3>
      <div>
        <label htmlFor="objective">Objective:</label>
        <textarea
          id="objective"
          name="objective"
          value={sessionDetails.objective}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="activities">Learning/Activities:</label>
        <textarea
          id="activities"
          name="activities"
          value={sessionDetails.activities}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="resources">Resources/Materials:</label>
        <textarea
          id="resources"
          name="resources"
          value={sessionDetails.resources}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="homework">Homework:</label>
        <textarea
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
