import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup } from '../../../styles/button-group';
import { Link } from "react-router-dom";
import "./type1.scss";
function Type1({inputs,title}) {

    const [countcl, setCount] = useState([]);

    useEffect(() => {
      const getcount = async () => {
        const res = await fetch("http://localhost:8800/api/list/"+inputs);
        const getdata = await res.json();
        setCount(getdata);
         console.log(getdata);
      };
  
      getcount();
    },[]);

  return (
        <div className="newContainer-test">
          <div className="top-test">
            {title}
          <label></label>
          </div>
          <div className="bottom-test">
              <Box classname = "box1" sx={{ display: 'flex','& > *': { m: 1, p:1},  }}>
            <div className="right-test">
                <ButtonGroup className="btg" orientation="Horizontal" aria-label="vertical outlined button group" >
                {countcl.map((getcount)=>((
                  <Link to={`/rooms/${getcount.idRoom}`} style={{ textDecoration: "none" }}>
                  <Button  variant="outlined" value = {`${getcount.status}`}  mt={10}  style={{ color: "black",backgroundColor: `${getcount.status}`==='active' ? "red" : "white" }} 
                  >{getcount.number_room}
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
export default Type1;