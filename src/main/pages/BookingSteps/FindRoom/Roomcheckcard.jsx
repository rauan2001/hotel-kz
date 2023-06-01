import React from 'react';
import './RoomCard.scss';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <div className="room-card__image">
        <img src={room.imageUrl} alt={room.title} />
        <div className="room-card__price">{room.price} за ночь</div>
      </div>
      <div className="room-card__details">
        <h3 className="room-card__title">{room.title}</h3>
        <div className="room-card__description">
          <p >
          {room.description}
          </p>
        </div>
        <div className="room-card__button">
          <button>Забронировать</button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
