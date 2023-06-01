import "./single.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Single = () => {
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
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Изменить</div>
            <h1 className="title">Информация</h1>
            <div className="item">
              <img
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{client.firstname} {client.lastname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    {client.email}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Телефон:</span>
                  <span className="itemValue">{client.number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Статус:</span>
                  <span className="itemValue">{client.status}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Комната:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Парковка:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Дата приезда:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Дата отъезда:</span>
                  <span className="itemValue"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;