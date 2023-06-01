import React from 'react'
import NavbarTest from '../../components/navbar/NavbarTest';
import SidebarTest from '../../components/sidebar/SidebarTest';
import "./BookingTest.scss";
import TableBooking from '../../components/Tables/Booking/TableBooking';
function BookingTest() {
  return (
    <div className='testhome-booking' style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='cont1-booking' style={{ flexBasis: '100%' }}>
        <NavbarTest/>
        </div>
        <div className='cont2-booking' style={{ flexBasis: '100%' }}>
        <SidebarTest/>
        </div>
        <div className='main-content-test-booking' style={{ flexBasis: '100%' }}>
           <TableBooking/>
        </div>
    </div>
  )
}

export default BookingTest