import React, { useState } from 'react';
import './RoomCard.scss';

const RoomCard = ({ rooms, selected, onSelectRoom }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const handleRoomClick = (id) => {
    if (selectedRooms.includes(id)) {
      setSelectedRooms((prevSelected) => prevSelected.filter((roomId) => roomId !== id));
    } else {
      setSelectedRooms((prevSelected) => [...prevSelected, id]);
    }
  };

  const handleClick = () => {
    const selectedRoom = rooms.find((room) => selectedRooms.includes(room.idRoom));
    onSelectRoom(selectedRoom);
  };

  return (
    <div className="room-card2">
      <div className="room-card__details2">
        <div className="room-list2">
          {rooms.map((room) => (
            <button
              key={room.idRoom}
              className={`room-2 ${selectedRooms.includes(room.idRoom) ? 'selected' : ''}`}
              onClick={() => handleRoomClick(room.idRoom)}
            >
              {room.number_room}
            </button>
        ))}
        </div>
        <div className="room-card__button">
          <button disabled={selectedRooms.length === 0} onClick={handleClick}>
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
