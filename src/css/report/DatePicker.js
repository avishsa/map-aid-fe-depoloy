import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import he from "date-fns/locale/zh-TW";

import "react-datepicker/dist/react-datepicker.css";
registerLocale('he', he);
const DatePicker = ({ selected, onChange }) => {    
    return (
        <DatePicker
            className="form-control"
            selected={selected}
            onChange={onChange}
            locale={he}
            dateFormat="yyyy/MM/dd"
            dateFormatCalendar="yyyy MM"
            isClearable
        />
    )
};

export default DatePicker;