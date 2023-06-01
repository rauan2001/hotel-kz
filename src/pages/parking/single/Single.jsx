import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/sidebar';
import Navbar from '../../../components/navbar/navbar';
import SidebarTest from '../../../Test/components/sidebar/SidebarTest';
import NavbarTest from '../../../Test/components/navbar/NavbarTest';
function Single_p() {
    const {parkId} = useParams();
    const [place,setPlace] = useState([]);

    useEffect(() => {
      const getplace = async () => {
        const res = await fetch("http://localhost:8800/api/parking/place/"+parkId);
        const getdata = await res.json();
        setPlace(getdata);
      };
  
      getplace();
    },[parkId]);

  return (
    <div className="single">
        <SidebarTest />
            <div className="singleContainer">
                 <NavbarTest />
                 <div className='top'>
                    <div className='left'>
                    <div className="editButton">Изменить</div>
                    <h1 className="title">Информация</h1>
                    <div className="item">
                    <div className="details">
                    <h1 className="itemTitle"></h1>
                        <div className="detailItem">
                      <span className="itemKey">Место:</span>
                    {place.map((getplace)=>
                      <span className="itemValue">
                        {getplace.place}
                      </span>
                          )}
                      </div>

                      <div className="detailItem">
                      <span className="itemKey">Цена:</span>
                      {place.map((getplace)=>
                      <span className="itemValue">
                          {getplace.cost}
                      </span>
                          )}
                      </div>

                      <div className="detailItem">
                      <span className="itemKey">Cтатус:</span>
                      {place.map((getplace)=>
                      <span className="itemValue">
                          {getplace.status}
                      </span>
                      )}
                      </div>

                      <div className="detailItem">
                      <span className="itemKey">Назначенное время:</span>
                      {place.map((getplace)=>
                      <span className="itemValue">
                          {getplace.start_time}
                      </span>
                       )}
                      </div>

                      <div className="detailItem">
                      <span className="itemKey">Конец дедлайна:</span>
                      {place.map((getplace)=>
                      <span className="itemValue">
                          {getplace.end_time}
                      </span>
                       )}
                      </div>

                    </div>
                    </div>
                    </div>
                 </div>

        </div>
    </div>
  )
}

export default Single_p;