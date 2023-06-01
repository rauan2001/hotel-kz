import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar-hotel">
      <div className="navbar__logo-hotel">Логотип отеля</div>
      <div className="navbar__hotel-title">Отель</div>
      <ul className="navbar__menu-hotel">
      <Link to = "/test/test">
      <li className="navbar__menu-itemhotel">Главная</li>
      </Link>
      <Link to = "/test/rooms">
      <li className="navbar__menu-itemhotel">Комнаты</li>
      </Link>
      <Link to = "/test/about">
      <li className="navbar__menu-itemhotel">Об этом</li>
      </Link>
      <Link to = "/test/contacts">
      <li className="navbar__menu-itemhotel">Контакты</li>
      </Link>
      </ul>
      <button className="navbar__button-hotel">Бронировать</button>
    </nav>
  );
};

export default Header;