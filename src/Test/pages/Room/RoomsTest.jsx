import React from 'react'
import NavbarTest from '../../components/navbar/NavbarTest';
import SidebarTest from '../../components/sidebar/SidebarTest';
import { useEffect, useState } from 'react';
import RoomList from '../../components/RoomList/RoomList';
import "./RoomsTest.scss"
import {Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
function RoomsTest() {
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState([]);
  useEffect(() => {
    const gettype = async () => {
      const res = await fetch("http://localhost:8800/api/list/");
      const getdata = await res.json();
      setType(getdata);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    gettype();
  },[]);
  return (
    <div className='testhome-room' style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='cont1-room' style={{ flexBasis: '100%' }}>
        <NavbarTest/>
        </div>
        <div className='cont2-room' style={{ flexBasis: '100%' }}>
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
        <div className='main-content-test-room' style={{ flexBasis: '33.33%' }}>
        {type.map((gettype)=>(
          <RoomList inputs = {gettype.idClass_room} title = {gettype.title}/>
          ))}
        </div>
        )}
    </div>
  )
}
export default RoomsTest;