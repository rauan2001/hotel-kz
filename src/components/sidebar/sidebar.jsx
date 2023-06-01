import React, { PureComponent } from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import RoomIcon from '@mui/icons-material/Room';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LuggageIcon from '@mui/icons-material/Luggage';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


export class Sidebar extends PureComponent {
  render() {
    return (
      <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Админ</span>
        </Link>
      </div>
      <hr />
        <div className='center'>
            <ul>
                <li>
                  <DashboardIcon/>
                  <span>Dashboard</span>
                  </li>
              <Link to ="/users" style={{textDecoration:"none"}}>
                <li>
                  <PersonIcon/>
                  <span>Клиенты</span>
                </li>
              </Link>
              <Link to ="/rooms" style={{textDecoration:"none"}}>
                <li>
                  <RoomIcon/>
                  <span>Комнаты</span>
                  </li>
              </Link>
                <li>
                  <AttachMoneyIcon/>
                  <span>Финансы</span>
                  </li>
                  <Link to ="/parking" style={{textDecoration:"none"}}>
                     <li>
                      <LocalParkingIcon/>
                      <span>Паркинг</span>
                    </li>
                  </Link>
                  <Link to ="/wardrobe" style={{textDecoration:"none"}}>
                <li> 
                  <LuggageIcon/>
                  <span>Гардероб</span>
                </li>
                  </Link>
                <li>
                  <ContactPageIcon/>
                  <span>Профиль</span>
                </li>
            </ul>
        </div>
      
      </div>
    )
  }
}

export default Sidebar;