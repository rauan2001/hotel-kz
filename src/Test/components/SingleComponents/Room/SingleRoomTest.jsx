import React from 'react'
import NavbarTest from '../../navbar/NavbarTest'
import SidebarTest from '../../sidebar/SidebarTest'
import axios from 'axios';
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { typeInputs } from '../../../../formSource';
import "./SingleRoomTest.scss";
function SingleRoomTest({inputs}) {
  const [file, setFile] = useState("");

  const [room, setRoom] = useState([]);
  const [check, setCheck] = useState([]);
  const {roomId} = useParams();
    const getSingleRoom=async()=>{
      const res = await axios.get("http://localhost:8800/api/room/number/"+roomId);
      const res1 = await axios.get("http://localhost:8800/api/room/check/"+roomId);
      if(res.status === 200){
        setRoom({...res.data[0]});
        setCheck({...res1.data[0]});
      }
    
    }
    useEffect(()=>{
      if(roomId){
        getSingleRoom({roomId});
      }
    },[roomId]);
    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: 'white'
    };
  return (
    <div className='single-test'>
      <div className='cont1-single-room'>
        <NavbarTest/>
      </div>
      <div className='cont2-single-room'>
        <SidebarTest/>
      </div>
      <div className="top-single-room">
        <h1>Информация комнаты</h1>
        </div>
        <div className="bottom-single-room">
        <div className="left-single-room">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right-single-room">
            <form>
              {inputs.map((input) => (
                <div className="formInput-single-room" key={input.id}>
                  <label className='lab'>{input.label}</label>
                  <input type={input.type} readOnly={true} style={{backgroundColor:"Silver"}} value = {room[`${input.name}`]} />
                </div>
              ))}
                { typeInputs.map((input) => (
                <div className="formInput-single-room" key={input.id}>
                  <label className='lab' >{input.label}</label>
                  <input type={input.type} readOnly={true} style={{backgroundColor:"Silver"}} value = {check[`${input.name}`]} />
                </div>
              ))}
                <div className="formInput-single-room">
                  <Link to ={`/rooms/update/${roomId}`} style={linkStyle}>
                  <button >
                    Изменить
                  </button>
                  </Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default SingleRoomTest