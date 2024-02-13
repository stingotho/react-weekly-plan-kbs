import React, { useState } from "react";
import "./App.css";

import NameInput from "./components/NameInput";
import SubjectSelector from "./components/SubjectSelector";
import WeekNumberInput from "./components/WeekNumberInput";
import DateRangePicker from "./components/DateRangePicker";
import "react-datepicker/dist/react-datepicker.css";
import GradeLevelSelector from "./components/GradeLevelSelector";
import UnitTitleSelector from "./components/UnitTitleSelector";
import UnitDescription from "./components/UnitDescription";
import SessionInput from "./components/SessionInput";
import PdfGeneratorButton from "./components/PdfGeneratorButton"; // Import the new component

function App() {
  const [teacherName, setTeacherName] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [weekNumber, setWeekNumber] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [gradeLevel, setGradeLevel] = useState("");
  const [unitTitle, setUnitTitle] = useState("");
  const [sessionDetails, setSessionDetails] = useState({
    objective: "",
    activities: "",
    resources: "",
    homework: "",
  });

  // Example subjects array
  const subjects = [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "history", label: "History" },
    // Add more subjects as needed
  ];
  // Define unit descriptions
  const unitDescriptions = {
    "Algebra I": "Introduction to algebraic expressions and equations.",
    Geometry: "Exploring the properties of shapes and forms.",
    Biology: "Study of life and living organisms.",
    "Earth Science": "Investigating earth and its processes.",
    // Add more descriptions as needed
  };
  // Determine the current unit description
  const currentUnitDescription =
    unitDescriptions[unitTitle] ||
    "Please select a unit title to see the description.";

  const formData = {
    teacherName,
    selectedSubject,
    weekNumber,
    dateRange, // You might want to format this to a more readable form
    gradeLevel,
    unitTitle,
    unitDescription: currentUnitDescription, // Add the unit description to formData
    sessionDetails, // This might need to be formatted or processed to display nicely in the PDF
  };

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
      <UnitDescription description={currentUnitDescription} />
      <SessionInput
        sessionDetails={sessionDetails}
        setSessionDetails={setSessionDetails}
      />
      <PdfGeneratorButton formData={formData} />
    </div>
  );
}

export default App;
