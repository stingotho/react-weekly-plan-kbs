import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PdfGeneratorButton({ formData }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Define the initial structure of the table based on requirements 1 to 3
    // Assuming the start of your generatePDF function and formData handling is unchanged...

    // Define the initial structure of the table based on requirements 1 to 3
    const tableRows = [
      // Combining Teacher's Name, Subject, and Grade Level into the first row
      [
        { content: `Teacher's Name: ${formData.teacherName}`, colSpan: 1 },
        { content: `Subject: ${formData.selectedSubject}`, colSpan: 1 },
        { content: `Grade Level: ${formData.gradeLevel}`, colSpan: 1 },
      ],
      // Week Number and Date Range in the second row
      [
        { content: `Week Number: ${formData.weekNumber}`, colSpan: 2 },
        { content: `Date Range: ${formData.dateRange}`, colSpan: 1 },
      ],
      // Unit Title and Description in the third row
      [
        { content: `Unit Title: ${formData.unitTitle}`, colSpan: 2 },
        {
          content: `Unit Description: ${formData.unitDescription}`,
          colSpan: 1,
        },
      ],
    ];

    // Dynamically adding session details to the table
    formData.sessionDetails.forEach((session, index) => {
      // Adding a row for the session header
      tableRows.push([{ content: `Session ${index + 1}`, colSpan: 3 }]);

      // Adding session details: Objective, Activities, Resources, and Homework
      tableRows.push(
        [
          { content: "Objective:", colSpan: 1 },
          { content: session.objective || "", colSpan: 2 },
        ],
        [
          { content: "Learning/Activities:", colSpan: 1 },
          { content: session.activities || "", colSpan: 2 },
        ],
        [
          { content: "Resources/Materials:", colSpan: 1 },
          { content: session.resources || "", colSpan: 2 },
        ],
        [
          { content: "Homework:", colSpan: 1 },
          { content: session.homework || "", colSpan: 2 },
        ]
      );
    });

    // Generate the table with autoTable
    autoTable(doc, {
      body: tableRows,
      theme: "grid",
      // Other autoTable options as needed...
    });
    // Save the PDF
    doc.save("weekly-plan.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Generate PDF
    </button>
  );
}

export default PdfGeneratorButton;
