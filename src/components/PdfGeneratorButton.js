import React from "react";
import jsPDF from "jspdf";

function PdfGeneratorButton({ formData }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10; // Margin for text
    const maxLineHeight = 10; // Maximum line height before adding a new page
    let linePosition = 10; // Initial line position

    // Utility function to add text with automatic page handling
    const addText = (text, options = {}) => {
      const { isTitle = false } = options;
      let lines = doc.splitTextToSize(text, pageWidth - 2 * margin); // Split text to size
      lines.forEach((line, index) => {
        // Check if we need to add a new page
        if (linePosition > pageHeight - margin) {
          doc.addPage();
          linePosition = margin; // Reset line position for new page
        }
        doc.setFontSize(isTitle ? 14 : 12); // Set font size based on whether text is a title
        doc.text(line, margin, linePosition);
        linePosition += maxLineHeight; // Increase line position
      });
      linePosition += maxLineHeight; // Extra space after block of text or title
    };

    // Document Title
    addText("Weekly Plan", { isTitle: true });

    // Adding basic form data to the PDF
    addText(`Teacher's Name: ${formData.teacherName}`);
    addText(`Subject: ${formData.selectedSubject}`);
    addText(`Grade Level: ${formData.gradeLevel}`);
    addText(`Week Number: ${formData.weekNumber}`);
    addText(`Date Range: ${formData.dateRange}`);
    addText(`Unit Title: ${formData.unitTitle}`);
    // For a long Unit Description, splitTextToSize will wrap the text
    addText(`Unit Description: ${formData.unitDescription}`);

    // Adding session details
    formData.sessionDetails.forEach((session, index) => {
      addText(`Session ${index + 1}:`, { isTitle: true });
      Object.entries(session).forEach(([key, value]) => {
        addText(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
      });
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
