// DatePicker.js
import React from "react";
import { DatePicker as ReactDatePicker } from "react-datepicker";

const Datepicker = () => {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="Select a date"
    />
  );
};

export default Datepicker;
