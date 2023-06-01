import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.scss";
function Client() {
  const [firstname,setFirstname] = useState([]);
  const [lastname,setLastname] = useState([]);
  const [number,setNumber] = useState([]);
  const [email,setEmail] = useState([]);
  const navigate = useNavigate();
  const saveData = () => {
    //saving username to sesstion storage
    window.sessionStorage.setItem("firstname", firstname);
    window.sessionStorage.setItem("lastname", lastname);
    window.sessionStorage.setItem("number", number);
    window.sessionStorage.setItem("email", email);
    navigate("/homepage/booking")
  };

  return (
    <div className='form'>
    <input type="text" placeholder="Фамилия"  name="firstname" value = {firstname} onChange={({ target }) => {setFirstname(target.value);}}/>
    <input type="text" placeholder="Имя"  name="lastname" value = {lastname} onChange={({ target }) => {setLastname(target.value);}}/>
    <input type="number" placeholder="Номер телефона"  name="number" value = {number} onChange={({ target }) => {setNumber(target.value);}}/>
    <input type="email" placeholder="E-mail"  name="email" value = {email} onChange={({ target }) => {setEmail(target.value);}}/>
    <button onClick={saveData}>Login</button>
</div>
  )
}

export default Client