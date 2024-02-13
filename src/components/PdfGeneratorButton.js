import React from "react";
import jsPDF from "jspdf";

function PdfGeneratorButton({ formData }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Basic styling
    const lineHeight = 10;
    let linePosition = 10; // Initial line position

    // Add a title
    doc.setFontSize(16);
    doc.text("Weekly Plan", 105, linePosition, "center");
    linePosition += lineHeight * 2; // Double space before starting content

    // Reset font size for the rest of the content
    doc.setFontSize(12);

    // Teacher Name
    doc.text(`Teacher's Name: ${formData.teacherName}`, 10, linePosition);
    linePosition += lineHeight;

    // Subject
    doc.text(`Subject: ${formData.selectedSubject}`, 10, linePosition);
    linePosition += lineHeight;

    // Grade Level
    doc.text(`Grade Level: ${formData.gradeLevel}`, 10, linePosition);
    linePosition += lineHeight;

    // Week Number
    doc.text(`Week Number: ${formData.weekNumber}`, 10, linePosition);
    linePosition += lineHeight;

    // Date Range
    doc.text(`Date Range: ${formData.dateRange}`, 10, linePosition);
    linePosition += lineHeight;

    // Unit Title
    doc.text(`Unit Title: ${formData.unitTitle}`, 10, linePosition);
    linePosition += lineHeight;

    // Unit Description
    doc.text(`Unit Description: ${formData.unitDescription}`, 10, linePosition);
    linePosition += lineHeight;

    // Session Details Heading
    doc.setFontSize(14);
    doc.text("Session Details:", 10, linePosition);
    linePosition += lineHeight;

    // Reset font size
    doc.setFontSize(12);

    // Iterate over session details
    Object.entries(formData.sessionDetails).forEach(([key, value]) => {
      doc.text(
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`,
        10,
        linePosition
      );
      linePosition += lineHeight;
    });

    // Save the PDF
    doc.save("weekly-plan.pdf");
  };

  return <button onClick={generatePDF}>Generate PDF</button>;
}

export default PdfGeneratorButton;
