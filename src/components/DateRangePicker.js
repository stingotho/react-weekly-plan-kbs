import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({ startDate, endDate, onChange }) {
  return (
    <div className="custom-datepicker">
      <DatePicker
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        isClearable={true}
        placeholderText="Select a date range"
      />
    </div>
  );
}

export default DateRangePicker;
