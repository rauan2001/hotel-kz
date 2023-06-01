import React, { useEffect, useState } from 'react'
import { useParams,useLocation,useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import { roomstatuses } from '../../../../formSource';
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import { usePlacesParking, usePlacesRooms, usePlacesWardrobe } from '../fetchSelects/selects';
import "./BookingUpdate.scss";
function BookingUpdate() {
    const {bookId} = useParams();

    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const parking = usePlacesParking();
    const wardrobe = usePlacesWardrobe();
    const room = usePlacesRooms();
    const [update,setUpdate] = useState({
      status:"",
      baggage_int:null,
      parkingid:null,
      roomid:null
    });
    
    const handletype =(event)=>{
        setUpdate((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      }
      const handleClick = async (e) => {
        e.preventDefault();
      
        try {
          // Создаем новый объект, содержащий только измененные поля
          const updatedFields = {};
          Object.keys(update).forEach((key) => {
            if (update[key] !== null && update[key] !== "") {
              updatedFields[key] = update[key];
            }
          });
      
          await axios.put("http://localhost:8800/api/booking/update/" + bookId, updatedFields);
          navigate("/bookings/" + bookId);
        } catch (err) {
          console.log(err);
          setError(true);
        }
      };
  return (
    <div className='single-test-update-book'>
    <div className='cont1-update-book'>
      <NavbarTest/>
    </div>
    <div className='cont2-update-book'>
      <SidebarTest/>
    </div>
    <div className="top-update-book">
      <h1>Информация о бронировании</h1>
      </div>
      <div className="bottom-update-book">
        <div className="right-update-book">
        <form> 
            <div className="formInput-update-book">
                <label>Статус</label>
                <select onChange={handletype}  name = "status" >
                  {roomstatuses.map((option) => (
              <option value={option.value}>{option.label}</option>
                  ))}
                 </select>
                </div>


                <div className="formInput-update-book">
                <label>Комната</label>
                <select onChange={handletype}  name = "roomid" >
                  {room.map((option) => (
              <option value={option.number_room}>{option.number_room}</option>
                  ))}
                 </select>
                </div>

                <div className="formInput-update-book">
                <label>Парковка</label>
                <select onChange={handletype}  name = "parkingid" >
                  {parking.map((option) => (
              <option value={option.place}>{option.place}</option>
                  ))}
                 </select>
                </div>

                <div className="formInput-update-book">
                <label>Гардероб</label>
                <select onChange={handletype}  name = "baggage_int" >
                  {wardrobe.map((option) => (
              <option value={option.place}>{option.place}</option>
                  ))}
                 </select>
                </div>

                
                <div className="formInput-update-book">
                  <button onClick={handleClick}>
                    Изменить
                  </button>

                </div>
            </form>
        </div>
      </div>
  </div>
  )
}

export default BookingUpdate