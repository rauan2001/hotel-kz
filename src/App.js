import React,{useState} from 'react';
import {
  BrowserRouter,
  Route, Router,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, roomInputs, roomInputs2 } from './formSource';
import Register from './homepage/authent/register';
import Login from './homepage/login/login';
import Rooms from './pages/rooms/rooms';
import Single_r from './pages/rooms/room_single/single_r';
import Update_r from './pages/rooms/updateroom/update_r';

import Single_p from './pages/parking/single/Single';
import Parking from './pages/parking/list/Parking';
import Wardrobe from './pages/wardrobe/list/Wardrobe';
import Single_w from './pages/wardrobe/single/Single';

import File1 from './session/file1';
import File2 from './session/file2';
import Client from './homepage/home/booking/client';
import Reservation from './homepage/home/booking/reservation';
import Main from './main/pages/Main/Main';
import Booking from './main/pages/Booking/Booking';
import BookingSteps from './main/pages/BookingSteps/BookingSteps';
import BookingStep2 from './main/pages/BookingSteps/bookingStep2/BookingStep2';
import End from './main/pages/BookingSteps/End/End';
import HomeTest from './Test/pages/HomeTest';
import RoomsTest from './Test/pages/Room/RoomsTest';
import SingleRoomTest from './Test/components/SingleComponents/Room/SingleRoomTest';
import RoomUpdate from './Test/components/UpdateComponents/RoomUpdate/RoomUpdate';
import ParkingTest from './Test/pages/Parking/ParkingTest';
import SingleParkingTest from './Test/components/SingleComponents/Parking/SingleParkingTest';
import WardrobeTest from './Test/pages/Wardrobe/WardrobeTest';
import SingleWardrobeTest from './Test/components/SingleComponents/Wardrobe/SingleWardrobeTest';
import ClientTest from './Test/pages/Client/ClientTest';
import SingleClientTest from './Test/components/SingleComponents/Client/SingleClientTest';
import BookingTest from './Test/pages/Booking/BookingTest';
import SingleBookingTest from './Test/components/SingleComponents/Booking/SingleBookingTest';
import ParkingUpdate from './Test/components/UpdateComponents/ParkingUpdate/ParkingUpdate';
import WardrobeUpdate from './Test/components/UpdateComponents/WardrobeUpdate/WardrobeUpdate';
import RoomsPage from './main/pages/Room/Rooms';
import About from './main/pages/About/About';
import Contacts from './main/pages/Contacts/Contacts';
import TableExport from './Test/components/Excel/TableExport';
import BookingUpdate from './Test/components/UpdateComponents/BookingUpdate/BookingUpdate';



function App (){
  return (
         <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path = "/">
            <Route index element = {<Home/>}/>
            <Route path='users'>
              <Route index element = {<ClientTest/>}/>
              <Route path = ":userId" element = {<SingleClientTest/>}/>
              <Route path = "new" element = {<New inputs={userInputs} title = "Добавить нового клиента"/>}/>
            </Route>

            <Route path='rooms'>
              <Route index element = {<RoomsTest/>}/>
              <Route path = ":roomId" element = {<SingleRoomTest inputs = {roomInputs}/>}/>
              <Route path = "update/:roomId" element = {<RoomUpdate inputs = {roomInputs}/>}/>
            </Route>

            <Route path='homepage'>
              <Route index element = {<Client/>}/>
              <Route path = "booking" element = {<Reservation/>}/>
            </Route>

            <Route path='parking'>
              <Route index element = {<ParkingTest/>}/>
              <Route path = ":parkId" element = {<SingleParkingTest/>}/>
              <Route path = "update/:parkId" element = {<ParkingUpdate/>}/>
            </Route>

            <Route path='wardrobe'>
              <Route index element = {<WardrobeTest/>}/>
              <Route path = ":wardId" element = {<SingleWardrobeTest/>}/>
              <Route path = "update/:wardId" element = {<WardrobeUpdate/>}/>
            </Route>
            <Route path='bookings'>
              <Route index element = {<BookingTest/>}/>
              <Route path = ":bookId" element = {<SingleBookingTest/>}/>
              <Route path = "update/:bookId" element = {<BookingUpdate/>}/>
            </Route>
            <Route path='excel'>
            <Route index element = {<TableExport/>}/>
            </Route>
            <Route path='test'>
              <Route index element/>
              <Route path = "test" element = {<Main/>}/>
              <Route path = "rooms" element = {<RoomsPage/>}/>
              <Route path = "about" element = {<About/>}/>
              <Route path = "contacts" element = {<Contacts/>}/>
              <Route path = "test1" element = {<BookingSteps/>}/>
              <Route path = "test1/:idTest" element = {<BookingStep2/>}/>
              <Route path = "itog" element = {<End/>}/>
              <Route path = "admin" element = {<HomeTest/>}/>
            </Route>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;
