import React, { useState, useEffect } from "react";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import Favorites from "./Favorites";
// import "../styles/styles.css";
import axios from "axios";
import Toggler from "./Toggler";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import { getWeather } from "../controllers/weather";
import { toast } from "sonner";
import FavoriteCitiesDropdown from "./FavCities";
import { addToFavorites, fetchFavorites } from "../controllers/favoritesController";

const WeatherDashboard = () => {
  const [currentCity, setCurrentCity] = useState();
  const [unit, setUnit] = useState("metric");
  const [favorites, setFavorites] = useState([]);

  // const fetchFavorites = async () => {
  //   const response = await axios.get("http://localhost:5000/favorites");
  //   setFavorites(response.data);
  //   return response.data;
  // };

  // const addToFavorites = async (city) => {
  //   axios
  //     .get("http://localhost:5000/favorites/" + city.id)
  //     .then(({ data }) => {
  //       if (data.length > 0) {
  //         alert("City already in favorites");
  //         return;
  //       }
  //     })
  //     .catch((error) => {});

  //   await axios.post("http://localhost:5000/favorites", {
  //     name: city.name,
  //     id: city.id,
  //   });
  //   await fetchFavorites();
  // };

  const toggleUnit = () => setUnit(unit === "metric" ? "imperial" : "metric");

  const handleFavorites = async (name ,id ) => {
     try {
      await addToFavorites({name , id }) ; 
      const data = await fetchFavorites() ; 
      setFavorites(data) ;
      toast.success("City added successfully")
      
     } catch (error) {
        toast.error(error.message) ;
        console.log(error) ;
     }
  };

  useEffect(() => {
    const lastCity =  JSON.parse(localStorage.getItem("lastCity")) ;
    if(lastCity && lastCity.city && lastCity.unit){
       getWeather(lastCity.city, lastCity.unit).then((data)=>{
        setCurrentCity(data) 
        toast.success("Got it!!");
       }).catch(error=>{
         toast.error(error.message)
         console.log(error) ; 
       })
    }

    fetchFavorites().then((data) => {
      setFavorites(data);


    });
  }, []);
console.log("favs ," ,favorites)
  return (
    <div className=" w-full ">
      <div className="flex w-full  justify-center mt-10">
      <Search setCurrentCity={setCurrentCity} unit={unit} />

      </div>
      <div className="pt-3 ">
        {currentCity && (
          <div className="relative">
            <div className="absolute top-2 right-5">
              <Toggler unit={unit} handleUnit={toggleUnit} />
            </div>
            <div className="flex-col flex justify-center items-center md:items-start md:flex-row md:justify-evenly h-fit w-full pt-4">
              <div className="sm:w-[80%] md:w-[45%] w-full  mt-10  p-2">
                <div className="w-full ">
                  <WeatherCard city={currentCity} unit={unit} />
                </div>
              </div>
              <div className="w-full md:w-[45%] mt-12">
                <Forecast city={currentCity} unit={unit} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* {currentCity && <WeatherDisplay city={currentCity} unit={unit} />} */}
      {
        currentCity &&
        <div className="w-full flex justify-center h-fit my-10  ">
          <button
          onClick={() => {handleFavorites(currentCity.name , currentCity.id);}}
          className="px-3 py-2 bg-white text-black rounded-md hover:bg-purple-500  hover:text-white shadow-md transition-all duration-200 ease-in-out">
        Add to favorites
      </button>
        </div>
      }
      {/* <Favorites  favorites={favorites} setFavorites={setFavorites} /> */}
      {/* setFavorites={setFavorites} setCurrentCity={setCurrentCity} unit={unit}/>   */}
     {
      favorites && favorites.length>0 &&
      <div className="w-full flex justify-center p-5 mb-48">
      <FavoriteCitiesDropdown  favorites={favorites} setFavorites={setFavorites} unit={unit} setCurrentCity={setCurrentCity} />
      </div>
     }
    </div>
  );
};

export default WeatherDashboard;
