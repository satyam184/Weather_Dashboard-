import React, { useEffect, useState } from "react";
import axios from "axios";

function Favorites({ favorites , setFavorites }) {
  // const [favorites, setFavorites] = useState([]);

  // const fetchFavorites = async () => {
  //   const response = await axios.get("http://localhost:5000/favorites");
  //   setFavorites(response.data);
  // };

  // const addToFavorites = async (city) => {
  //   await axios.post("http://localhost:5000/favorites", { name: city.name });
  //   fetchFavorites();
  // };

  // const removeFromFavorites = async (id) => {
  //   console.log("id: ", id)
  //   await axios.delete(`http://localhost:5000/favorites/${id}`);
  //   fetchFavorites();
  // };

  // useEffect(() => {
  //   fetchFavorites();

  // }, [favorites]);

  return (
    <div className="favorites">
      
    </div>
  );
}

export default Favorites;
