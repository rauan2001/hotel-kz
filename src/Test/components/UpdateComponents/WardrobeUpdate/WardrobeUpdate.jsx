import React, { useEffect, useState } from 'react';
import { useParams,useLocation,useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import { roomstatuses } from '../../../../formSource';
import "./WardrobeUpdate.scss";
function WardrobeUpdate() {
    const {wardId} = useParams();
    const [file, setFile] = useState("");
    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const [update,setUpdate] = useState({
      status:"",
      item:"",
    });
    const handletype =(event)=>{
      setUpdate((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };
    const handleClick = async (e) => {
      e.preventDefault();
    
      try {
        await axios.put("http://localhost:8800/api/wardrobe/update/"+wardId, update);
        navigate("/wardrobe/"+wardId);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    return (
        <div className='single-test-update-ward'>
        <div className='cont1-update-ward'>
          <NavbarTest/>
        </div>
        <div className='cont2-update-ward'>
          <SidebarTest/>
        </div>
        <div className="top-update-ward">
          <h1>Информация комнаты</h1>
          </div>
          <div className="bottom-update-ward">
          <div className="left-update-ward">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right-update-ward">
            <form> 
                <div className="formInput-update-ward">
                    <label>Статус</label>
                    <select onChange={handletype}  name = "status" >
                      {roomstatuses.map((option) => (
                  <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    </div>
                    <div className="formInput-update-ward">
                    <label>Описание</label>
                    <input type = "text" onChange={handletype} name = "item"></input>
                    </div>
                    <div className="formInput-update-ward">
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

export default WardrobeUpdate