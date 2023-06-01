import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup } from '../../../styles/button-group';
import { Link } from "react-router-dom";

function Type({inputs,title}) {

    const [countcl, setCount] = useState([]);

    useEffect(() => {
      const getcount = async () => {
        const res = await fetch("http://localhost:8800/api/wardrobe/"+inputs);
        const getdata = await res.json();
        setCount(getdata);
      };
  
      getcount();
    },[]);

  return (
        <div className="newContainer">
          <div className="top">
           Гардероб №{title}
          <label></label>
          </div>
          <div className="bottom">
              <Box classname = "box1" sx={{ display: 'flex','& > *': { m: 1, p:1},  }}>
            <div className="right">
                <ButtonGroup className="btg" orientation="Horizontal" aria-label="vertical outlined button group" >
                {countcl.map((getcount)=>((
                  <Link to={`/wardrobe/${getcount.id_bag}`} style={{ textDecoration: "none" }}>
                  <Button  variant="outlined" value = {`${getcount.status}`}  mt={10}  style={{ color: "black",backgroundColor: `${getcount.status}`==='active' ? "red" : "white" }} 
                  >{getcount.place}
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

export default Type;