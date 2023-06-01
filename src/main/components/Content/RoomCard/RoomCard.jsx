import React, { useState,useEffect } from 'react';
import './RoomCard1.scss';

const RoomCard = ({inputs}) => {
  return (
    <div className="room-card">
      <div className="room-card__image">
        <img src="https://www.eliaermouhotel.com/uploads/nr_photos/D1920/deluxefamilyroom_8180.jpg" alt="Room" />
        
      </div>
      <div className="room-card__price">{inputs.price} тг в сутки</div>
      <div className="room-card__details">
        <h3 className="room-card__title">{inputs.title}</h3>
        <div className="room-card__description">
          <p >
          {inputs.description}
          </p>
        </div>
        <div className="room-card__facilities">
          <ul>
            <li>Wi-Fi</li>
            <li>Кондиционер</li>
            <li>Телевизор</li>
            <li>Мини-бар</li>
            <li>Сейф</li>
            <li>Рабочий стол</li>
          </ul>
        </div>
        <div className="room-card__button">
          <button>Забронировать</button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
