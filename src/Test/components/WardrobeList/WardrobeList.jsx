import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonGroup } from '../../../styles/button-group';
import { Link } from "react-router-dom";
import "./WardrobeList.scss";
function WardrobeList({inputs,title}) {
  const [wardl, setwardl] = useState([]);

  useEffect(() => {
    const getward = async () => {
      const res = await fetch("http://localhost:8800/api/wardrobe/"+inputs);
      const getdata = await res.json();
      setwardl(getdata);
    };

    getward();
  },[]);
  return (
    <div className='wardrobe-list-test'>
    <div className="top-test-wardrobe"> 
          <label>{title}</label>
    </div>
          <div className="bottom-test-wardrobe">
              <Box classname = "box1-wardrobe" sx={{ display: 'flex','& > *': { m: 1, p:1},  }}>
            <div className="right-test-wardrobe">
                <ButtonGroup className="btg-wardrobe" orientation="Horizontal" aria-label="vertical outlined button group" >
                {wardl.map((getward)=>((
                  <Link to={`/wardrobe/${getward .id_bag}`} style={{ textDecoration: "none" }}>
                  <Button  sx={{ fontSize: "20px", padding: "10px 20px" }} variant="outlined" value = {`${getward.status}`}  mt={10}  style={{ color: "black",backgroundColor: `${getward.status}`==='active' ? "red" : "white" }} 
                  >{getward.place}
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

export default WardrobeList