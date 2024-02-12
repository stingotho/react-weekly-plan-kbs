import React, { useState } from "react";
import "./App.css";

import NameInput from "./components/NameInput"; // Adjust the path as necessary
import SubjectSelector from "./components/SubjectSelector"; // Import the new component

function App() {
  const [teacherName, setTeacherName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  // const [dateRange, setDateRange] = useState({ start: null, end: null });
  // const [weekNumber, setWeekNumber] = useState("");
  // const [gradeLevel, setGradeLevel] = useState("");
  // const [unitTitle, setUnitTitle] = useState("");
  // const [unitDescription, setUnitDescription] = useState("");
  // const [sessionDetails, setSessionDetails] = useState({
  //   objective: "",
  //   activities: "",
  //   resources: "",
  //   homework: "",
  // });

  // Example subjects array
  const subjects = [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "history", label: "History" },
    // Add more subjects as needed
  ];

  return (
    <div className="app">
      <h1>Weekly Plan Input Form</h1>
      <NameInput value={teacherName} onChange={setTeacherName} />
      <SubjectSelector
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        subjects={subjects}
      />
    </div>
  );
}

export default App;
