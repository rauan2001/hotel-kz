import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup } from '../../../styles/button-group';
import { Link } from "react-router-dom";
import "./RoomList.scss";
function RoomList({inputs,title}) {
    const [roomsl, setRoomsl] = useState([]);

    useEffect(() => {
      const getroomsl = async () => {
        const res = await fetch("http://localhost:8800/api/list/"+inputs);
        const getdata = await res.json();
        setRoomsl(getdata);
         console.log(getdata);
      };
  
      getroomsl();
    },[]);
    
  return (
    <div className='room-list-test'>
    <div className="top-test"> 
          <label>{title}</label>
    </div>
          <div className="bottom-test">
              <Box classname = "box1" sx={{ display: 'flex','& > *': { m: 1, p:1},  }}>
            <div className="right-test">
                <ButtonGroup className="btg" orientation="Horizontal" aria-label="vertical outlined button group" >
                {roomsl.map((getroomsl)=>((
                  <Link to={`/rooms/${getroomsl.idRoom}`} style={{ textDecoration: "none" }}>
                  <Button  variant="outlined" value = {`${getroomsl.status}`}  mt={10}  style={{ color: "black",backgroundColor: `${getroomsl.status}`==='active' ? "red" : "white" }} 
                  >{getroomsl.number_room}
                  </Button>
                  </Link>
                  )
                  ))}
                </ButtonGroup>
                {"   "}
              </div>
              </Box>
          </div>
    </div>
  )
}

export default RoomList