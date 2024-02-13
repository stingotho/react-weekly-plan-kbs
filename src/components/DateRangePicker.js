import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({ startDate, endDate, onChange }) {
  return (
    <div>
      <DatePicker
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
