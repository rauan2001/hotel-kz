import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">Hotel</div>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">Комнаты</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Услуги</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Галерея</a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
