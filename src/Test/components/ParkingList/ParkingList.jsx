import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup } from '../../../styles/button-group';
import { Link } from "react-router-dom";
import "./ParkingList.scss";
function ParkingList({inputs,title}) {
    const [parkingl, setParkingl] = useState([]);

    useEffect(() => {
      const getparking = async () => {
        const res = await fetch("http://localhost:8800/api/parking/"+inputs);
        const getdata = await res.json();
        setParkingl(getdata);
      };
  
      getparking();
    },[]);
  return (
    <div className='parking-list-test'>
    <div className="top-test-parking"> 
          <label>Зона {title}</label>
    </div>
          <div className="bottom-test-parking">
              <Box classname = "box1-parking" sx={{ display: 'flex','& > *': { m: 1, p:1},  }}>
            <div className="right-test-parking">
                <ButtonGroup className="btg-parking" orientation="Horizontal" aria-label="vertical outlined button group" >
                {parkingl.map((getparking)=>((
                  <Link to={`/parking/${getparking.idParking}`} style={{ textDecoration: "none" }}>
                  <Button  sx={{ fontSize: "20px", padding: "10px 20px" }} variant="outlined" value = {`${getparking.status}`}  mt={10}  style={{ color: "black",backgroundColor: `${getparking.status}`==='active' ? "red" : "white" }} 
                  >{getparking.place}
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

export default ParkingList