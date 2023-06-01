import React from 'react'
import "./main.scss";
function Main() {
  return (
    <div className='form'>
    <input type="text" placeholder="Фамилия"  name="firstname"/>
    <input type="text" placeholder="Имя"  name="lastname"/>
    <input type="number" placeholder="Номер телефона"  name="number"/>
    <input type="email" placeholder="E-mail"  name="email"/>

    
    <button >Login</button>
</div>
  )
}

export default Main;