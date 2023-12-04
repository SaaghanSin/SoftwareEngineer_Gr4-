import React, { useState, useEffect } from "react";
import "./DatePicker.css";
import { useMyContext } from "../contextModify";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { staticModify } = useMyContext();
  const [originalDate, setOriginalDate] = useState(null);

  const handleDateChange = (event) => {
    if (!staticModify) {
      const dateValue = event.target.value;
      setSelectedDate(dateValue);
    }
  };

  // Get the current date in the "YYYY-MM-DD" format
  const getCurrentDate = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!staticModify) {
      // Save the original values when entering modify mode
      setOriginalDate(selectedDate);
    }
  }, [staticModify, selectedDate]);

  return (
    <div>
      <label htmlFor="datepicker">Ngày </label>
      <input
        type="date"
        id="datepicker"
        value={selectedDate}
        onChange={(event) => handleDateChange(event)}
        min={getCurrentDate()} // Set the minimum date
        disabled={!staticModify} // Disable the input if staticModify is true
      />
    </div>
  );
};

export default Datepicker;
