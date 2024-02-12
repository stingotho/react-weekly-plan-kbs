import React, { useState } from "react";
import "./App.css";

import NameInput from "./components/NameInput";
import SubjectSelector from "./components/SubjectSelector";
import WeekNumberInput from "./components/WeekNumberInput";
import DateRangePicker from "./components/DateRangePicker";
import "react-datepicker/dist/react-datepicker.css";
import GradeLevelSelector from "./components/GradeLevelSelector";
import UnitTitleSelector from "./components/UnitTitleSelector";
function App() {
  const [teacherName, setTeacherName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [gradeLevel, setGradeLevel] = useState("");
  const [unitTitle, setUnitTitle] = useState("");
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
      <WeekNumberInput
        value={weekNumber}
        onChange={(e) => setWeekNumber(e.target.value)}
      />
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
      />
      <GradeLevelSelector
        value={gradeLevel}
        onChange={(e) => setGradeLevel(e.target.value)}
      />
      <UnitTitleSelector
        value={unitTitle}
        onChange={(e) => setUnitTitle(e.target.value)}
        gradeLevel={gradeLevel}
        subject={selectedSubject}
      />
    </div>
  );
}

export default App;
