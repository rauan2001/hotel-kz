import React, { useState } from 'react';
import './SearchRoom.scss';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './fone7-c.jpg';
import image2 from './fone66.jpg';
import image3 from './f10.jpg';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

  const images = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
  ];

const SearchRoom = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      checkInDate: event.target.elements.checkInDate.value,
      checkOutDate: event.target.elements.checkOutDate.value,
      adults: event.target.elements.adults.value,
      children: event.target.elements.children.value,
    };
    localStorage.setItem('bookingData', JSON.stringify(formData));
    navigate("/test/test1");
  };
  return (
    <div className="search-room">
      <Slider className='slick-slider' {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="room" />
          </div>
        ))}
      </Slider>
          <div className="search-room__wrapper">
            <form onSubmit={handleSubmit}>
              <div className="search-room__row">
                <div className="search-room__item">
                  <label className="search-room__label">Заезд</label>
                  <input className="search-room__input" type="date" name="checkInDate" />
                </div>
                <div className="search-room__item">
                  <label className="search-room__label">Выезд</label>
                  <input className="search-room__input" type="date" name="checkOutDate"/>
                </div>
                <div className="search-room__item">
                  <label className="search-room__label">Взрослые</label>
                  <select className="search-room__select" name = "adults">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div className="search-room__item">
                  <label className="search-room__label">Дети</label>
                  <select className="search-room__select" name = "children">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="search-room__item">
                   <button type = "submit" className="search-room__button">Поиск</button>
                </div>
              </div>
            </form>
          </div>
        </div>
  );
};
export default SearchRoom;