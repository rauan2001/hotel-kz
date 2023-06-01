import React from 'react'
import Header from '../../components/navbar/Header'
import Footer from '../../components/footer/Footer'
import RoomContent from '../../components/Content/RoomContent/RoomContent';
import "./Rooms.scss";
function RoomsPage() {
  return (
    <div className="container">
       <div className="header">
        <Header/>
        </div>
        <div className="content">
            <RoomContent/>
        </div>
        <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default RoomsPage;