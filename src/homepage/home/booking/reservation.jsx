import React, { useState, useEffect } from "react";
import "./style.scss";
function Reservation() {
    const [room, setRoom] = useState([]);
    useEffect(() => {
      const getroom = async () => {
        const res = await fetch("http://localhost:8800/api/booking/room");
        const getdata = await res.json();
        setRoom(getdata);
        // console.log(getdata);
      };
  
      getroom();
    },[]);

    const[park,setPark]=useState([]);
    useEffect(() => {
        const getpark = async () => {
          const res = await fetch("http://localhost:8800/api/booking/parking");
          const getdata = await res.json();
          setPark(getdata);
          // console.log(getdata);
        };
    
        getpark();
      },[]);
      const[baggage,setBaggage]=useState([]);
      useEffect(() => {
          const getbag = async () => {
            const res = await fetch("http://localhost:8800/api/booking/baggage");
            const getdata = await res.json();
            setBaggage(getdata);
            // console.log(getdata);
          };
      
          getbag();
        },[]);
  return (
    <div className='form'>
        <select name = "number" >
                  {room.map((getroom) => (
              <option value={getroom.idRoom}>{getroom.number_room}</option>
                   ))}
        </select>          

        <select name = "parking" >
                  {park.map((getpark) => (
              <option value={getpark.idParking}>{getpark.place}</option>
                   ))}
        </select>

        <select name = "baggage" >
                  {baggage.map((getbag) => (
              <option value={getbag.id_bag}>{getbag.place}</option>
                   ))}
        </select>            
    </div>
  )
}

export default Reservation;