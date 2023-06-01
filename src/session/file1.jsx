import React from 'react'


function File1() {
    let firstname = window.sessionStorage.getItem("firstname");
    let lastname = window.sessionStorage.getItem("lastname");
    let number = window.sessionStorage.getItem("number");
    let email = window.sessionStorage.getItem("email");
  return (
    <div>
        {firstname}
        {" "}
        {lastname}
    </div>
  )
}

export default File1;