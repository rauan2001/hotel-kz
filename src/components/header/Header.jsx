import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-toggle">
          <i className="fas fa-bars"></i>
        </button>
        <img src="" alt="Logo" className="header__logo" />
      </div>
      <div className="header__right">
        <input type="text" placeholder="Search..." className="header__search-input" />
        <button className="header__notification-button">
          <i className="far fa-bell"></i>
        </button>
        <div className="header__user-profile">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="header__user-profile-image" />
          <span className="header__user-profile-name">John Doe</span>
          <i className="fas fa-caret-down header__user-profile-caret"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
