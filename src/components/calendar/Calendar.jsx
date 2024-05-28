import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';


function Calendar() {

    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        console.log(newDate.$D)
    };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDateTimePicker 
    value={selectedDate}
    onChange={handleDateChange}
    defaultValue={dayjs()} />
  </LocalizationProvider>
  )
}

export default Calendar