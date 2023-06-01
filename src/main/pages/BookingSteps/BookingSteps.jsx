import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';
import Booking from '../Booking/Booking';
import FindRoom from './FindRoom/FindRoom';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import {Typography} from "@mui/material";
import './BookingSteps.scss';
function BookingSteps() {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const handleSearch = (checkInDate, checkOutDate, adults, children) => {
      setCheckInDate(checkInDate);
      setCheckOutDate(checkOutDate);
      setAdults(adults);
      setChildren(children);
    };
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);
  return (
    <div className='container'>
        <Header/>
         <Booking onSearch={handleSearch}/>
         <div>
         {isLoading ? (
              <div className="loading">
              <CircularProgress />
              <Typography variant="h5" component="h2" className="loading-text">
                Загружается...
              </Typography>
              </div>
            ) : (
         <FindRoom checkInDate={checkInDate} checkOutDate={checkOutDate} adults={adults} children={children} />
         )}
         </div>
         <div className='footer-container'>
         </div>
    </div>
  )
}
export default BookingSteps