import React from 'react';
import './RoomCard.scss';
import { Link } from 'react-router-dom';
const ClassCard1 = ({ room }) => {
  return (
    <div className="room-card">
      <div className="room-card__image">
        <img src="https://www.eliaermouhotel.com/uploads/nr_photos/D1920/deluxefamilyroom_8180.jpg" alt={room.title} />
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
        <Link to={`/test/test1/${room.idClass_room}`}><button >Забронировать</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ClassCard1;
