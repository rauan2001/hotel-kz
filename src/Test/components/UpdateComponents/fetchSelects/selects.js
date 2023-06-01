import { useState, useEffect } from "react";

export const usePlacesParking = () => {
  const [parking, setParking] = useState([]);

  useEffect(() => {
    const getPlacesParking = async () => {
      const res = await fetch("http://localhost:8800/api/select/parking");
      const getdata = await res.json();
      setParking(getdata);
    };

    getPlacesParking();
  }, []);

  return parking;
}
export const usePlacesWardrobe = () => {
  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    const getPlacesWardrobe = async () => {
      const res = await fetch("http://localhost:8800/api/select/wardrobe");
      const getdata = await res.json();
      setWardrobe(getdata);
    };

    getPlacesWardrobe();
  }, []);

  return wardrobe;
}

export const usePlacesRooms = () => {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const getPlacesRoom = async () => {
      const res = await fetch("http://localhost:8800/api/select/room");
      const getdata = await res.json();
      setRoom(getdata);
    };

    getPlacesRoom();
  }, []);

  return room;
}
