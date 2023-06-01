import { useState, useEffect } from 'react';
import './Booking.scss'

const Booking = (props) => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      checkInDate,
      checkOutDate,
      adults,
      children
    };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    const dataToSend = JSON.stringify({
      checkInDate: bookingData.checkInDate,
      checkOutDate: bookingData.checkOutDate,
      adults: bookingData.adults,
      children: bookingData.children
    });
    props.onSearch(dataToSend);
  };

  useEffect(() => {
    const bookingData = localStorage.getItem('bookingData');
    if (bookingData) {
      const parsedData = JSON.parse(bookingData);
      setCheckInDate(parsedData.checkInDate);
      setCheckOutDate(parsedData.checkOutDate);
      setAdults(parsedData.adults);
      setChildren(parsedData.children);
    }
  }, []);
  return (
<div className="booking">
<form onSubmit={handleSubmit}>
<div className="booking__wrapper">
  <h1 className="booking__title">Забронируйте</h1>
  <div className="booking__form">
    <div className="booking__form-group">
      <label htmlFor="checkInDate">Заезд</label>
      <input
        type="date"
        id="checkInDate"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
    </div>
    <div className="booking__form-group">
      <label htmlFor="checkOutDate">Выезд</label>
      <input
        type="date"
        id="checkOutDate"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
    </div>
    <div className="booking__form-group">
      <label htmlFor="adults">Взрослые</label>
      <input
        type="number"
        id="adults"
        value={adults}
        min="1"
        onChange={(e) => setAdults(parseInt(e.target.value))}
      />
    </div>
    <div className="booking__form-group">
      <label htmlFor="children">Дети</label>
      <input
        type="number"
        id="children"
        value={children}
        min="0"
        onChange={(e) => setChildren(parseInt(e.target.value))}
      />
    </div>
    <button className="booking__form-submit" type="submit">Поиск</button>
  </div>
</div>
</form>
</div>
  );
};
export default Booking;
