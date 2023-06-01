import React from 'react'
import axios from 'axios';
import { useState,useEffect } from "react";
import { useParams,useLocation,useNavigate,Link } from "react-router-dom";
import { roomstatuses } from '../../../../formSource';
import "./RoomUpdate.scss";
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
function RoomUpdate({inputs}) {
    const [type,setType]=useState([]);
    const [id,SetId] = useState([]);
    const [info,setInfo] = useState([]);
    console.log(id);
    const [update,setUpdate] = useState({
      status:"",
      idClass_room:null,
    });
    const {roomId} = useParams();
    useEffect(() => {
      const getType = async () => {
        const res = await fetch("http://localhost:8800/api/type/");
        const getdata = await res.json();
        setType(getdata);
      };
  
      getType();
    },[]);
  
    const handletype =(event)=>{
      const getid = event.target.value;
      SetId(getid);
      setUpdate((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
  
    useEffect(() => {
      const getall = async () => {
        const ress = await fetch("http://localhost:8800/api/type/"+id);
        const resst = await ress.json();
        setInfo(await resst);
      };
  
      getall();
    },[id]);

    const [room, setRoom] = useState(
      {
          number_room:null,
          status:"",
      }
  );
  
  const getSingleRoom=async()=>{
    const res = await axios.get("http://localhost:8800/api/room/number/"+roomId);
    if(res.status === 200){
      setRoom({...res.data[0]});
    }
  
  }
  useEffect(()=>{
    if(roomId){
      getSingleRoom({roomId});
    }
  },[roomId]);
  
  const [file, setFile] = useState("");
  const [error,setError] = useState(false)
  
  const location = useLocation();
  const navigate = useNavigate();
  
  //update
  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      await axios.put("http://localhost:8800/api/room/update/"+roomId, update);
      navigate("/rooms");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className='single-test-update'>
    <div className='cont1-update'>
      <NavbarTest/>
    </div>
    <div className='cont2-update'>
      <SidebarTest/>
    </div>
    <div className="top-update">
      <h1>Информация комнаты</h1>
      </div>
      <div className="bottom-update">
      <div className="left-update">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right-update">
        <form> 
            <div className="formInput-update">
                <label>Статус</label>
                <select onChange={handletype}  name = "status" >
                  {roomstatuses.map((option) => (
              <option value={option.value}>{option.label}</option>
                  ))}
                 </select>
                </div>

                <div className="formInput-update">
                <label>Тип комнаты</label>
                <select name='idClass_room' onChange={(e)=>handletype(e)}>
                <option value = "" >Выберите... </option>
                    {
                        type.map((getType,index) => ( 
                          <option key={index}  value = {getType.idClass_room}> {getType.title} </option>
                        ))
                    }
                </select>   
                </div>
                <div className="formInput-update">
                <label>Цена</label>
                <select name='price'>
                  {
                      info.map((getall,index) => ( 
                        <option key={index}> {getall.price} </option>
                      ))
                  }
              </select>
                    
                </div>
                <div className="formInput-update">
                <label>Описание</label>
                <select name='description'>
                {
                    info.map((getall,index) => ( 
                      <option key={index}> {getall.description} </option>
                    ))
                }
            </select>
                </div>
                <div className="formInput-update">
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

export default RoomUpdate;