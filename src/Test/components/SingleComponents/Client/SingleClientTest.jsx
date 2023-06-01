import React from 'react'
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./SingleClientTest.scss";
function SingleClientTest() {
    const [client,setClient] = useState([]);
    const {userId} = useParams();
  
   // console.log(userId); 
  
    useEffect(()=>{
      if(userId){
        getSingleClient({userId});
      }
    },[userId]);
  
    const getSingleClient=async()=>{
      const res = await axios.get("http://localhost:8800/api/client/info/"+userId);
      if(res.status === 200){
        setClient({...res.data[0]});
      }
  
    }
  return (
    <div className='single-test-client'>
        <div className='cont1-single-client'>
        <NavbarTest/>
        </div>
        <div className='cont2-single-client'>
        <SidebarTest/>
        </div>
      <div className='top-single-client'>
        <div className='left-single-client'>
        <h1 className="title-single-client">Информация</h1>
        <div className="item-single-client">

        <div className="details-single-client">

        <h1 className="itemTitle-single-client">{client.firstname} {client.lastname}</h1>
            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Email:</span>
            <span className="itemValue-single-client">
            {client.email}
            </span>
            </div>

            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Телефон:</span>
            <span className="itemValue-single-client">
                {client.number}
            </span>
            </div>

            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Cтатус:</span>
            <span className="itemValue-single-client">
                {client.status}
            </span>
            </div>

            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Комната:</span>
            <span className="itemValue-single-client">
                {/* {input.status} */}
            </span>
            </div>

            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Парковка:</span>
            <span className="itemValue-single-client">

            </span>
            </div>

            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Назначенное время:</span>
            <span className="itemValue-single-client">

            </span>
            </div>

            <div className="detailItem-single-client">
            <span className="itemKey-single-client">Конец дедлайна:</span>
            <span className="itemValue-single-client">

            </span>
            </div>
                     </div>

            <div className="editButton-single-client">Изменить</div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default SingleClientTest