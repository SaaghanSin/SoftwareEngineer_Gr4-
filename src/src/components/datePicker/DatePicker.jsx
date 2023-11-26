import React, { useState } from 'react';
import "./DatePicker.css";
const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
  };

  return (
    <div>
      <label htmlFor="datepicker">Ngày </label>
      <input
        type="date"
        id="datepicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
    );
};
export default Datepicker;