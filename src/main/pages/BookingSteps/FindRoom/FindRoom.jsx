import { useEffect, useState } from 'react';
import ClassCard1 from './ClassCard1';
import { fetchRoomsData } from './data1';
const FindRoom = () => {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));
  const checkInDate = bookingData ? bookingData.checkInDate : null;
  const checkOutDate = bookingData ? bookingData.checkOutDate : null;
  const adults = bookingData ? bookingData.adults : 1;
  const children = bookingData ? bookingData.children : 0;
  useEffect(() => {
    const filterRooms = async () => {
      const roomsData = await fetchRoomsData(checkInDate, checkOutDate);
      const filtered = roomsData.filter((room) => {
        const isAdultsValid = adults <= room.adults;
        const isChildrenValid = children <= room.children;
        return isAdultsValid && isChildrenValid;
      });
      setFilteredRooms(filtered);
    };
    filterRooms();
  }, [checkInDate, checkOutDate, adults, children]);
  return (
    <div>
      <h2>Свободные номера:</h2>
      <div className="room-list">
        {filteredRooms.length === 0 && <p>Нет доступных номеров</p>}
        {filteredRooms.map(room => (
          <ClassCard1 key={room.idClass_room} room={room} />
        ))}
      </div>
    </div>
  );
};
export default FindRoom;
