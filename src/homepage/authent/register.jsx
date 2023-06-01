import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    login: "",
    password: "",
    address: "",
    telephone: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
  };
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='form'>
      <input type="text" placeholder="Firstname" onChange={handleChange} name="firstname"/>
        <input type="text" placeholder="Lastname" onChange={handleChange} name="lastname"/>
        <input type="text" placeholder="Login" onChange={handleChange} name="login"/>
        <input type="password" placeholder="Password" onChange={handleChange} name="password"/>
        <input type="text" placeholder="Address" onChange={handleChange} name="address"/>
        <input type="text" placeholder="Telephone" onChange={handleChange} name="telephone"/>
        <button onClick={handleClick}>Register</button>
    </div>
    
  )
}

export default Register;