import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/sidebar';
import Navbar from '../../../components/navbar/navbar';
function Single_w() {
    const {wardId} = useParams();
    const [place,setPlace] = useState([]);

    useEffect(() => {
      const getplace = async () => {
        const res = await fetch("http://localhost:8800/api/wardrobe/place/"+wardId);
        const getdata = await res.json();
        setPlace(getdata);
      };
  
      getplace();
    },[wardId]);

  return (
    <div className="single">
        <Sidebar />
            <div className="singleContainer">
                 <Navbar />
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

export default Single_w;