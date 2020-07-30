import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ changeDate, date }) {
  return (
    <div class="date">
      Select a Date:
      <br />
      <DatePicker selected={date} onChange={changeDate} />
    </div>
  );
}

export default DateInput;
