import React from 'react'
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import "./SingleParkingTest.scss";
function SingleParkingTest() {
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
    <div className='single-test-parking'>
        <div className='cont1-single-parking'>
        <NavbarTest/>
        </div>
      <div className='cont2-single-parking'>
        <SidebarTest/>
      </div>
      <div className='top-single-parking'>
        <div className='left-single-parking'>
        <h1 className="title-single-parking">Информация</h1>
        <div className="item-single-parking">
        {place.map((getplace)=>(
        <div className="details-single-parking">

        <h1 className="itemTitle-single-parking"></h1>
            <div className="detailItem-single-parking">
            <span className="itemKey-single-parking">Место:</span>
            <span className="itemValue-single-parking">
            {getplace.place}
            </span>
            </div>

            <div className="detailItem-single-parking">
            <span className="itemKey-single-parking">Цена:</span>
            <span className="itemValue-single-parking">
                {getplace.price}
            </span>
            </div>

            <div className="detailItem-single-parking">
            <span className="itemKey-single-parking">Cтатус:</span>
            <span className="itemValue-single-parking">
                {getplace.status}
            </span>
            </div>

            <div className="detailItem-single-parking">
            <span className="itemKey-single-parking">Номер автомобиля:</span>
            <span className="itemValue-single-parking">
              {getplace.number_car}
            </span>
            </div>
            <div className="detailItem-single-parking">
            <span className="itemKey-single-parking">Назначенное время:</span>
            <span className="itemValue-single-parking">
                {getplace.start_time}
            </span>
            </div>

            <div className="detailItem-single-parking">
            <span className="itemKey-single-parking">Конец дедлайна:</span>
            <span className="itemValue-single-parking">
                {getplace.end_time}
            </span>
            </div>
                     </div>
                  ))}
                  <Link to ={`/parking/update/${parkId}`}>
                            <div className="editButton-single-parking">Изменить</div>
                  </Link>
                          
                 </div>
            </div>
            
        </div>
    </div>
  )
}

export default SingleParkingTest