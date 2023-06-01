import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./ItogForm.scss";
function ItogForm({ clientId, selectedRoom, parking }) {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    const checkInDate = bookingData ? bookingData.checkInDate : null;
    const navigate = useNavigate();
    const checkOutDate = bookingData ? bookingData.checkOutDate : null;
    const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:8800/api/home/add', {
            clientid:clientId,
            roomid: selectedRoom,
            parkingid:parking,
            checkin:checkInDate,
            checkout:checkOutDate
          });
          console.log(response.data);
          navigate("/test/itog");
        } catch (error) {
          console.error(error);
        }
      };
  return (
    
    <div>
      <h2>Информация о бронировании</h2>
      <table>
        <tbody>
          <tr>
            <td>Номер ID клиента:</td>
            <td>{clientId}</td>
          </tr>
          <tr>
            <td>Выбранный номер:</td>
            <td>{selectedRoom}</td>
          </tr>
          <tr>
            <td>Место на парковке:</td>
            <td>{parking || ''}</td>
          </tr>
          <tr>
            <td>Время въезда:</td>
            <td>{checkInDate}</td>
          </tr>
          <tr>
            <td>Время выезда:</td>
            <td>{checkOutDate}</td>
          </tr>
          <tr>
            <td>Цена:</td>
            <td>{45000}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSubmit}>Забронировать</button>
    </div>
  );
}

export default ItogForm;