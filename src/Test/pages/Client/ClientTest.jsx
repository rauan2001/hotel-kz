import React from 'react'
import NavbarTest from '../../components/navbar/NavbarTest';
import SidebarTest from '../../components/sidebar/SidebarTest';
import "./ClientTest.scss";
import TableClient from '../../components/Tables/Client/TableClient';
import {Typography} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
function ClientTest() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='testhome-client' style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className='cont1-client' style={{ flexBasis: '100%' }}>
        <NavbarTest/>
        </div>
        <div className='cont2-client' style={{ flexBasis: '100%' }}>
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
        <div className='main-content-test-client' style={{ flexBasis: '100%' }}>
            <TableClient/>
        </div>
        )}
    </div>
  )
}

export default ClientTest