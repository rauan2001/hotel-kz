import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Type1 from './types/type1.jsx';
import SidebarTest from "../../Test/components/sidebar/SidebarTest";
import NavbarTest from "../../Test/components/navbar/NavbarTest";
import "./rooms.scss";
export default function GroupOrientation() {

  const [type, setType] = useState([]);
  useEffect(() => {
    const gettype = async () => {
      const res = await fetch("http://localhost:8800/api/list/");
      const getdata = await res.json();
      setType(getdata);
    };

    gettype();
  },[]);
  return (
    <div className="new-test">
       <SidebarTest/>
        <div className="cont-test" style={{display: 'flex'}}>
       <NavbarTest />
       <div className="list-test" style={{flex: 1}}>
       {type.map((gettype)=>(
                <Type1 inputs = {gettype.idClass_room} title = {gettype.title}/>
              ))}
       </div>
        </div>
    </div>
  );
}
