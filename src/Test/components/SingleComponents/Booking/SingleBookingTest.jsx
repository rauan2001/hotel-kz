import React from 'react'
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import "./SingleBookingTest.scss";
function SingleBookingTest() {
  const [booking,setBooking] = useState([]);
  const {bookId} = useParams();
  useEffect(()=>{
    if(bookId){
      getSingleBooking({bookId});
    }
  },[bookId]);

  const getSingleBooking=async()=>{
    const res = await axios.get("http://localhost:8800/api/booking/"+bookId);
    if(res.status === 200){
      setBooking({...res.data[0]});
    }

  }
  return (
    <div className='single-test-booking'>
        <div className='cont1-single-booking'>
        <NavbarTest/>
        </div>
        <div className='cont2-single-booking'>
        <SidebarTest/>
        </div>
        <div className='top-single-booking'>
        <div className='left-single-booking'>
        <h1 className="title-single-booking">Информация</h1>
        <div className="item-single-booking">

        <div className="details-single-booking">

        <h1 className="itemTitle-single-booking">{booking.firstname} {booking.lastname}</h1>
            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Email:</span>
            <span className="itemValue-single-booking">
            {booking.email}
            </span>
            </div>

            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Телефон:</span>
            <span className="itemValue-single-booking">
                {booking.number}
            </span>
            </div>

            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Cтатус:</span>
            <span className="itemValue-single-booking">
                {booking.status}
            </span>
            </div>

            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Комната:</span>
            <span className="itemValue-single-booking">
                {booking.number_room}
            </span>
            </div>

            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Парковка:</span>
            <span className="itemValue-single-booking">
                {booking.parkingId}
            </span>
            </div>
            
            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Гардероб:</span>
            <span className="itemValue-single-booking">
              {booking.baggage_int === null ? "Нет" : booking.baggage_int}
              
            </span>
            </div>

            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Назначенное время:</span>
            <span className="itemValue-single-booking">
            {moment(booking.checkin).format("YYYY-MM-DD")}
            </span>
            </div>

            <div className="detailItem-single-booking">
            <span className="itemKey-single-booking">Конец дедлайна:</span>
            <span className="itemValue-single-booking">
            {moment(booking.checkout).format("YYYY-MM-DD")}
            </span>
            </div>
                     </div>
                     <Link to ={`/bookings/update/${bookId}`}>
                     <div className="editButton-single-booking">Изменить</div>
                     </Link>
                 </div>
            </div>
        </div>     
    </div>
  )
}

export default SingleBookingTest