import axios from 'axios';

export const fetchRoomsData = async (checkInDate, checkOutDate) => {
  try {
    const response = await axios.get(`http://localhost:8800/api/home/?checkin=${checkInDate}&checkout=${checkOutDate}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTypesRooms = async() =>{
  try {
    const response = await axios.get(`http://localhost:8800/api/type/all`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}