
import axios from "axios";
const API_KEY = "c33afd3bd3eada4b9c50478522875e2a";


export async function getWeather(city,unit) {
  city = city.trim() ; 
  if (!city) {
    throw new Error("City name is required");
  }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      return response.data;
     
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw new Error("City not found or something went wrong..");
    }
}

export async function getForecast(city,unit) {
    console.log(city)
   try {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
       return response.data ;
      // setForecast(response.data.list.slice(0, 5));
    
   } catch (error) {
      console.log("error in fetching forecast data", error);
      throw error ;
   }
  };
