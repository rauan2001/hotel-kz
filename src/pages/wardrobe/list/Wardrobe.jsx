import Navbar from "../../../components/navbar/navbar";
import Sidebar from "../../../components/sidebar/sidebar";
import React, { useState, useEffect } from "react";
import { parkingcount } from "../../../formSource";
import Type from "./type.jsx";
function Wardrobe() {
  return (
    <div className="new">
        <Sidebar/>
            <div className="newContainer">
              <Navbar />

                {parkingcount.map((park)=>(
                    <Type inputs = {park.number} title = {park.name}/>
                ))}
            </div>
     </div>
  )
}

export default Wardrobe;