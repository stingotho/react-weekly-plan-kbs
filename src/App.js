import React, { useState } from "react";
import "./App.css";

import NameInput from "./components/NameInput";
import SubjectSelector from "./components/SubjectSelector";
import WeekNumberInput from "./components/WeekNumberInput";
import DateRangePicker from "./components/DateRangePicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [teacherName, setTeacherName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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
    </div>
  );
}

export default App;
