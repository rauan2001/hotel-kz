import React from 'react'
import NavbarBar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import Widget from '../../components/widget/widget';
import 'bootstrap/dist/css/bootstrap.css';

import "./home.scss";
function home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavbarBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='charts'>
      </div>
    </div>
    </div>
  )
}

export default home