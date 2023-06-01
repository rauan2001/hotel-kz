import React from 'react'
import Navbar from '../../../components/navbar/navbar';
import Sidebar from '../../../components/sidebar/sidebar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios';
import { typeInputs } from '../../../formSource';
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./single_r.scss";
import SidebarTest from '../../../Test/components/sidebar/SidebarTest';
import NavbarTest from '../../../Test/components/navbar/NavbarTest';

function Single_r({inputs}) {
    const [file, setFile] = useState("");

    const [room, setRoom] = useState([]);
    const [check, setCheck] = useState([]);
    const {roomId} = useParams();
    //console.log(`room.{${inputs.name}}`);
    
      const getSingleRoom=async()=>{
        const res = await axios.get("http://localhost:8800/api/room/number/"+roomId);
        const res1 = await axios.get("http://localhost:8800/api/room/check/"+roomId);
        if(res.status === 200){
          setRoom({...res.data[0]});
          setCheck({...res1.data[0]});
          // const res1 = await axios.get("http://localhost:8800/api/room/check/"+roomId); 
          // if(res1.status === 200){
          //   setCheck({...res1.data[0]});
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
    <div className="new">
        <SidebarTest/>
        <div className="newContainer">
        <NavbarTest/>
        <div className="top">
        <h1>Информация комнаты</h1>
        </div>
        <div className="bottom">
        <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
        <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className='lab'>{input.label}</label>
                  <input type={input.type} readOnly={true} style={{backgroundColor:"Silver"}} value = {room[`${input.name}`]} />
                </div>
              ))}
                { typeInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className='lab' >{input.label}</label>
                  <input type={input.type} readOnly={true} style={{backgroundColor:"Silver"}} value = {check[`${input.name}`]} />
                </div>
              ))}
                <div className="formInput">
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
    </div>
  )
}

export default Single_r;