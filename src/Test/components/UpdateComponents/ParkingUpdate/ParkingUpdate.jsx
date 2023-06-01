import React, { useEffect, useState } from 'react';
import { useParams,useLocation,useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import { roomstatuses } from '../../../../formSource';
import "./ParkingUpdate.scss";
function ParkingUpdate() {
  const {parkId} = useParams();
  const [file, setFile] = useState("");
  const [error,setError] = useState(false);
  const navigate = useNavigate();
  const [update,setUpdate] = useState({
    status:"",
    number_car:"",
  });
  const handletype =(event)=>{
    setUpdate((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }
  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      await axios.put("http://localhost:8800/api/parking/update/"+parkId, update);
      navigate("/parking/"+parkId);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className='single-test-update-park'>
    <div className='cont1-update-park'>
      <NavbarTest/>
    </div>
    <div className='cont2-update-park'>
      <SidebarTest/>
    </div>
    <div className="top-update-park">
      <h1>Информация парковки</h1>
      </div>
      <div className="bottom-update-park">
      <div className="left-update-park">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right-update-park">
        <form> 
            <div className="formInput-update-park">
                <label>Статус</label>
                <select onChange={handletype}  name = "status" >
                  {roomstatuses.map((option) => (
              <option value={option.value}>{option.label}</option>
                  ))}
                 </select>
                </div>

                <div className="formInput-update-park">
                <label>Номер автомобиля</label>
                <input type = "text" name = "number_car" onChange={handletype}></input>
                </div>
                <div className="formInput-update-park">
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

export default ParkingUpdate;