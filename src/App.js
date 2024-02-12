import React, { useState } from "react";
import "./App.css";

import NameInput from "./components/NameInput"; // Adjust the path as necessary

function App() {
  // const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState("");
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

  // Other component logic

  return (
    <div className="app">
      <h1>Weekly Plan Input Form</h1>
      {<NameInput value={teacherName} onChange={setTeacherName} />}
    </div>
  );
}

export default App;
