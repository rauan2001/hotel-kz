import React,{useState,useEffect} from 'react'
import Gallery from '../../components/Content/Gallery/Gallery';
import HotelDescription from '../../components/Content/Hotel/HotelDescription';
import RoomCard from '../../components/Content/RoomCard/RoomCard';
import SearchRoom from '../../components/Content/SearchRoom/SearchRoom';
import Services from '../../components/Content/Services/Services';
import Footer from '../../components/footer/Footer';
import Header from '../../components/navbar/Header';
import './Main.scss'; 

function Main() {
  const [type,setTypes] = useState([]);
  useEffect(() => {
    const gettypes = async () => {
      const res = await fetch("http://localhost:8800/api/type/all");
      const getdata = await res.json();
      setTypes(getdata);
    };
    gettypes();
  },[]);
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <SearchRoom/>
        <div className="content-description">
        <HotelDescription />
        </div>
        {type.map((gettypes)=>(
        <RoomCard inputs = {gettypes}/>
        ))}
        <div className="gallery-container">
          <Gallery />
        </div>
        <Services />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
export default Main;