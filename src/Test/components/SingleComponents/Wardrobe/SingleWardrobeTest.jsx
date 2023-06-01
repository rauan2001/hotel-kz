import React from 'react'
import { useEffect,useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import NavbarTest from '../../navbar/NavbarTest';
import SidebarTest from '../../sidebar/SidebarTest';
import "./SingleWardrobeTest.scss";
function SingleWardrobeTest() {
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
    <div className='single-test-wardrobe'>
        <div className='cont1-single-wardrobe'>
        <NavbarTest/>
      </div>
      <div className='cont2-single-wardrobe'>
        <SidebarTest/>
      </div>
      <div className='top-single-wardrobe'>
        <div className='left-single-wardrobe'>
        <h1 className="title-single-wardrobe">Информация</h1>
        <div className="item-single-wardrobe">
        {place.map((getplace)=>(
        <div className="details-single-wardrobe">

        <h1 className="itemTitle-single-wardrobe"></h1>
            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">Место:</span>
            <span className="itemValue-single-wardrobe">
            {getplace.place}
            </span>
            </div>

            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">Цена:</span>
            <span className="itemValue-single-wardrobe">
                {getplace.price}
            </span>
            </div>

            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">Cтатус:</span>
            <span className="itemValue-single-wardrobe">
                {getplace.status}
            </span>
            </div>

            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">Описание предмета:</span>
            <span className="itemValue-single-wardrobe">
               {getplace.item}
            </span>
            </div>

            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">ID клиента:</span>
            <span className="itemValue-single-wardrobe">
               {/* ФИО клиента */}
            </span>
            </div>

            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">Назначенное время:</span>
            <span className="itemValue-single-wardrobe">
                {getplace.start_time}
            </span>
            </div>

            <div className="detailItem-single-wardrobe">
            <span className="itemKey-single-wardrobe">Конец дедлайна:</span>
            <span className="itemValue-single-wardrobe">
                {getplace.end_time}
            </span>
            </div>
                     </div>
                     
                  ))}
                  <Link to ={`/wardrobe/update/${wardId}`}>
                  <div className="editButton-single-wardrobe">Изменить</div>
                  </Link>
                 </div>
            </div>
            
        </div>
    </div>
  )
}

export default SingleWardrobeTest