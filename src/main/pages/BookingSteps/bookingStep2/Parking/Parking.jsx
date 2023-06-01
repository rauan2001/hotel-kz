import styles from "./Parking.scss";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import ParkingCard from "./Single/ParkingCard";
const Parking = ({SetIdParking}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [parks, setParks] = useState([]);
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));
  const checkInDate = bookingData ? bookingData.checkInDate : null;
  const checkOutDate = bookingData ? bookingData.checkOutDate : null;
  const [selectedParking, setSelectedParking] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/homeparking/",
          { checkInDate, checkOutDate }
        );
        setParks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [checkInDate, checkOutDate]);
  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };
  const handleSelectPark = (park) => {
    setSelectedParking(park);
    const parking = park;
    SetIdParking(parking);
  };
  return (
    <div className={styles.parkingCardContainer}>
       <div className={styles.parkingCard}>
      <div className={styles.header}>
        <h3>Парковка</h3>
        <button className={styles.button} onClick={handleButtonClick}>
          {isFormVisible ? "Отмена" : "Забронировать парковку"}
        </button>
      </div>
      {isFormVisible && (
        <div className={styles.form}>
              <ParkingCard parks={parks} onSelectPark = {handleSelectPark}/>
        </div>
      )}
    </div>
    </div>
  );
};
export default Parking;

