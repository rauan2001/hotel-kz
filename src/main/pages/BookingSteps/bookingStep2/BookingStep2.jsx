import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Header from "../../../components/navbar/Header";
import RoomCard from "./RoomCard";
import Parking from "./Parking/Parking";
import "./BookingStep2.scss";
import { Tabs, Tab,Box } from '@mui/material';
import {Typography} from "@mui/material";
import ClientForm from "./ClientForm/ClientForm";
import ItogForm from "./ItogForm/ItogForm";
import CircularProgress from '@mui/material/CircularProgress';
import { TransitionGroup, CSSTransition } from "react-transition-group";
const BookingStep2 = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [parking,setparking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRoomSelected, setIsRoomSelected] = useState(false);
  const [clientId, setClientId] = useState(null);
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false); 
  const [value, setValue] = useState(0);
  const {idTest} = useParams();
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));
  const checkInDate = bookingData ? bookingData.checkInDate : null;
  const checkOutDate = bookingData ? bookingData.checkOutDate : null;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/home/"+idTest,
          { checkInDate, checkOutDate }
        );
        setRooms(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    if (isRoomSelected) {
      setValue(1);
    }
  }, [checkInDate, checkOutDate, idTest, isRoomSelected]);

  const handleSelectRoom = async (selectedRoom) => {
    setSelectedRoom(selectedRoom);
    setIsRoomSelected(true);
  };
  const SetIdParking =  async (parking)=>{
    setparking(parking);
    setValue(3);
  }

  const onClientSubmit =  async (clientId) => {
    setClientId(clientId);
  };
  const handleNextButtonClick = () => {
    setIsNextButtonClicked(true);
    setValue(2);
  }; 
  //таймер
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleChangeTab = (event, newValue) => {
    if (newValue === 1 && !isRoomSelected) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setValue(newValue);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="step-two">
    <Header/>
    {isLoading ? (
      <div className="loading">
        <CircularProgress />
        <Typography variant="h5" component="h2" className="loading-text">
          Загружается...
        </Typography>
      </div>
    ) : (
    <div className="booking-step-content">
      <h2>Бронирование номера</h2>
      <Tabs value={value} onChange={handleChangeTab}>
        <Tab label="Выбор номера" />
        <Tab label="Заполнение данных"  disabled={!isRoomSelected}/>
        <Tab label="Дополнительно"/>
        <Tab label="Итог"/>
      </Tabs>
      <Box sx={{ pt: 3 }}>
      <TransitionGroup>
              <CSSTransition
                key={value}
                classNames="fade"
                timeout={{ enter: 1000, exit: 300 }}
              >
        <TabPanel value={value} index={0} >
          <ul>
            <div className="roomcard">
                <RoomCard key={rooms.idRoom} rooms={rooms} 
                selected={selectedRoom?.idRoom === rooms.idRoom}   
                onSelectRoom={handleSelectRoom}  />
            </div>
          </ul>
        </TabPanel>
        </CSSTransition>
      </TransitionGroup>
        <TransitionGroup>
              <CSSTransition
                key={value}
                classNames="fade"
                timeout={{ enter: 1000, exit: 300 }}
              >
        <TabPanel value={value} index={1}>
        <div className="client">
                <ClientForm onClientSubmit={onClientSubmit} />
                {clientId && 
                <div>
                <p>Ваш номер ID: {clientId}
                   <button onClick={handleNextButtonClick}>Дальше</button>
                </p>
                  </div>
                }
          </div>
        </TabPanel>
        </CSSTransition>
      </TransitionGroup>
        <TabPanel value={value} index={2}>
{ isRoomSelected && <div className="parkingcard">
            <Parking SetIdParking = {SetIdParking}/>
            {parking}
          </div>}
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className="itog">
          <ItogForm clientId={clientId} selectedRoom={selectedRoom?.idRoom} parking={parking?.idParking}/>
          </div>
        </TabPanel>
      </Box>
    </div>
    )}
    </div>
  );
};

export default BookingStep2;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
    {/* {isLoading ? (
            <div className="loading">
            <CircularProgress />
            <Typography variant="h5" component="h2" className="loading-text">
              Загружается...
            </Typography>
            </div>
            ) : ( */}
        {/* )} */}