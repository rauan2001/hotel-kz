import "./new.scss";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { options } from "../../formSource";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react'

const New = ({ inputs,  title }) => {
  const [file, setFile] = useState("");

  const [clients, setClients] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    email: "",
    status:"",
  });
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setClients((prev)=>({...prev,[e.target.name]:e.target.value}));
  };
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/client", clients);
      navigate("/users")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
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
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} name={input.name} onChange={handleChange}/>
                </div>
              ))}
                  <select onChange={handleChange}  name = "status" >
                  {options.map((option) => (
              <option value={option.value}>{option.label}</option>
                   ))}
                  </select>
              <button onClick={handleClick}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;