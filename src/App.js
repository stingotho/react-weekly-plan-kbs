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
  const [sessionDetails, setSessionDetails] = useState([
    {
      objective: "",
      activities: "",
      resources: "",
      homework: "",
    },
  ]);

  // Example subjects array
  const subjects = [
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "history", label: "History" },
    // Add more subjects as needed
  ];
  // Define unit descriptions
  const unitDescriptions = {
    "Algebra I":
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    Geometry: "Exploring the properties of shapes and forms.",
    Biology: "Study of life and living organisms.",
    "Earth Science": "Investigating earth and its processes.",
    // Add more descriptions as needed
  };
  // Determine the current unit description
  const currentUnitDescription =
    unitDescriptions[unitTitle] ||
    "Please select a unit title to see the description.";
  // Function to handle adding a new session
  const addSession = () => {
    setSessionDetails([
      ...sessionDetails,
      { objective: "", activities: "", resources: "", homework: "" },
    ]);
  };

  // Function to handle changes in any session input
  const updateSession = (index, name, value) => {
    const updatedSessions = [...sessionDetails];
    updatedSessions[index] = { ...updatedSessions[index], [name]: value };
    setSessionDetails(updatedSessions);
  };
  // Define the formatDate function within App.js
  const formatDate = (date) => {
    if (!date) return "";
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0"); // JavaScript months are 0-indexed
    let year = date.getFullYear().toString().substr(-2); // Get last 2 digits of year
    return `${day}/${month}/${year}`;
  };

  // Before setting up formData, format the startDate and endDate
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  const formattedDateRange =
    startDate && endDate ? `${formattedStartDate} to ${formattedEndDate}` : "";

  const formData = {
    teacherName,
    selectedSubject,
    weekNumber,
    dateRange: formattedDateRange, // Use the formatted date range here
    gradeLevel,
    unitTitle,
    unitDescription: currentUnitDescription, // Add the unit description to formData
    sessionDetails, // This might need to be formatted or processed to display nicely in the PDF
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-gray-900">
          Weekly Plan Input Form
        </h1>
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
        <div className="space-y-4">
          {sessionDetails.map((session, index) => (
            <SessionInput
              key={index}
              sessionIndex={index}
              sessionDetails={session}
              updateSession={updateSession}
            />
          ))}
          <button
            onClick={addSession}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Session
          </button>
        </div>
        <PdfGeneratorButton formData={formData} />
      </div>
    </div>
  );
}

export default App;
