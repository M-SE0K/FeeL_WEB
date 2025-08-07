// src/component/calendar/CustomCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
//import './CustomCalendar.css';

function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <div className="calendar-left">
        <Calendar/>
      </div>

    </div>
  );
}

export default CustomCalendar; 