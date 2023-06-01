import React, { useState } from "react";
import DatePicker,{registerLocale, setDefaultLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./style1.scss";


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Calendate() {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const today = new Date();
  let newData = {};

  const eventhandler = res => Object.assign(newData, res);

  const changeDate = (date) => {
      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + 1);
      setStartDate(date);
      setEndDate(nextDate);
  }

  const CustomInput = ({ value, onClick }) => (
      <div className='calendar' onClick={onClick}>
          <input type='text' className="form-item" value={value} />
          <i className="bi bi-calendar-week"></i>
      </div>
  );

  return (
      <section className='search d-flex align-items-center'>
          <div className='search-wrapper w-100 my-3'>
              <div className='container py-3 search-content'>
                  <DatePicker
                      dateFormat='dd/MM/yyyy'
                      selected={startDate}
                      onChange={changeDate}
                      startDate={startDate}
                      minDate={today}
                      customInput={<CustomInput />}
                  />
                  <DatePicker
                      dateFormat='dd/MM/yyyy'
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      startDate={endDate}
                      minDate={endDate}
                      customInput={<CustomInput />}
                  />
              </div>
          </div>
      </section>
  )
}

export default Calendate;