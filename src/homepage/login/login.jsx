import "./login.scss";
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [inputs, setInputs] = useState({
        login: "",
        password: "",
      });
    
      const navigate = useNavigate();
      const handleChange = (e) =>{
        setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
      };
      const handleClick = async e =>{
        e.preventDefault()
        try{
          await axios.post("http://localhost:8800/api/auth/login", inputs);
          navigate("/")
        }catch(err){
          console.log(err)
        }
      }

    return (
        <div className='form'>
            <input type="text" placeholder="Login" onChange={handleChange} name="login"/>
            <input type="password" placeholder="Password" onChange={handleChange} name="password"/>
            <button onClick={handleClick}>Login</button>
        </div>
        
      )
};
export default Login;
