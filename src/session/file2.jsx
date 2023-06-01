import React from 'react';
import { ReactSession } from 'react-client-session';

function File2() {
    let data = window.sessionStorage.getItem("key");

  return (
    <p>User Name is: {data}</p>
  )
}

export default File2;