import React from 'react'
import { parkingcount } from '../../../formSource';
import NavbarTest from '../../components/navbar/NavbarTest';
import SidebarTest from '../../components/sidebar/SidebarTest';
import ParkingList from '../../components/ParkingList/ParkingList';
import {Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import "./ParkingTest.scss";
function ParkingTest() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='testhome-parking' style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='cont1-parking' style={{ flexBasis: '100%' }}>
        <NavbarTest/>
        </div>
        <div className='cont2-parking' style={{ flexBasis: '100%' }}>
        <SidebarTest/>
        </div>
        {isLoading ? (
              <div className="loading">
              <CircularProgress />
              <Typography variant="h5" component="h2" className="loading-text">
                Загружается...
              </Typography>
              </div>
            ) : (
        <div className='main-content-test-parking' style={{ flexBasis: '33.33%' }}>
        {parkingcount.map((park)=>(
          <ParkingList inputs = {park.number} title = {park.name}/>
          ))}
        </div>
        )}
    </div>
  )
}

export default ParkingTest