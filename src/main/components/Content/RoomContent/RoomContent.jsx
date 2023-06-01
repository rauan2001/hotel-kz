import React from "react";
import "./RoomContent.scss";
import image1 from './1.jpg';
import image2 from './2.jpg';
const RoomContent = () => {
  const roomTypes = [
    {
      name: "Стандартный номер",
      description: "Уютный номер",
      amenities: ["Кондиционер", "Телевизор", "Бесплатный Wi-Fi"],
      price: "15000 тенге/день",
      image: image2,
    },
    {
      name: "Люкс",
      description: "Роскошный номер",
      amenities: ["Кондиционер", "Телевизор", "Мини-бар", "Бесплатный Wi-Fi"],
      price: "30000 тенге/день",
      image: image1,
    },
    // добавьте сюда другие типы номеров
    {
      name: "Семейный",
      description: "Семейный номер",
      amenities: ["Кондиционер", "Телевизор", "Мини-бар", "Бесплатный Wi-Fi"],
      price: "40000 тенге/день",
      image: image1,
    },
  ];

  return (
    <div className="room-card-container-content">
  {roomTypes.map((roomType) => (
      <div className="room-card-content">
        <img className="room-image-content" src={roomType.image} alt={roomType.name} />
        <div className="room-details-content">
          <h2 className="room-name-content">{roomType.name}</h2>
          <p className="room-description-content">{roomType.description}</p>
          <ul className="room-amenities-content">
            {roomType.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
          <p className="room-price-content">{roomType.price}</p>
          <button className="book-button-content">Забронировать</button>
        </div>
      </div>
      ))}
    </div>
  );
};
export default RoomContent;
