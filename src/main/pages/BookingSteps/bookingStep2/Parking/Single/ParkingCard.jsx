import React, { useState } from 'react';
import './ParkingCard.scss';

const ParkingCard = ({ parks, onSelectPark}) => {
  const [selectedParks, setSelectedParks] = useState([]);

  const handleParkClick = (id) => {
    if (selectedParks.includes(id)) {
      setSelectedParks((prevSelected) => prevSelected.filter((idParking) => idParking !== id));
    } else {
      if (selectedParks.length < 1) { // проверяем количество выбранных парковок
        setSelectedParks((prevSelected) => [...prevSelected, id]);
      }
    }
  };
  
  const handleClickP = (event) => {
    event.preventDefault();
    const selectedPark = parks.find((park) => selectedParks.includes(park.idParking));
    onSelectPark(selectedPark);
  };

  return (
    <div className="parking-card2">
        <div className="parking-list">
          {parks.map((park) => (
            <button
              key={park.idParking}
              className={`parking ${selectedParks.includes(park.idParking) ? 'selected' : ''}`}
              onClick={() => handleParkClick(park.idParking)}
            >
              {park.place}
            </button>
          ))}
        </div>
        <div className="parking-card__button">
          <button disabled={selectedParks.length === 0} onClick={handleClickP}>
            Забронировать
          </button>
        </div>
    </div>
  );
};

export default ParkingCard ;
