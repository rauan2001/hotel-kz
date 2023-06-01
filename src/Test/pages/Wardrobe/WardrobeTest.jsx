import React from 'react';
import { parkingcount } from '../../../formSource';
import NavbarTest from '../../components/navbar/NavbarTest';
import SidebarTest from '../../components/sidebar/SidebarTest';
import WardrobeList from '../../components/WardrobeList/WardrobeList';
import {Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import "./WardrobeTest.scss";
function WardrobeTest() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='testhome-wardrobe' style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='cont1-wardrobe' style={{ flexBasis: '100%' }}>
        <NavbarTest/>
        </div>
        <div className='cont2-wardrobe' style={{ flexBasis: '100%' }}>
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
        <div className='main-content-test-wardrobe' style={{ flexBasis: '33.33%' }}>
        {parkingcount.map((park)=>(
          <WardrobeList inputs = {park.number} title = {park.name}/>
          ))}
        </div>
          )}
    </div>
  )
}

export default WardrobeTest