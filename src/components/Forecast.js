import React, { useEffect, useState } from 'react'
import { getForecast } from '../controllers/weather';
export default function Forecast({city, unit}) {

  console.log(city);
  const [forecast, setForecast] = useState([]);

  
  useEffect(() => {

       getForecast(city.name , unit).then((data)=>{
        setForecast(data.list.slice(0,5));
        console.log("forecasts",forecast)
       }).catch((err)=>{
        console.log("forecasts error",err) ; 
        setForecast([])
       })
    
  }, [city, unit]);

  return (
    <div className='w-full shadow-md rounded-md  '>
     <h1 className='text-center bg-white text-2xl bg-clip-text font-semibold text-transparent bg-gradient-to-tl from-slate-400 to-slate-800'>Upcoming weather forecasts</h1>
     <div className='p-3'>
       {
        forecast.map((forecast,id)=>(
          <div key={id} className='flex w-full justify-between items-center text-center border-b border-gray-100 mx-1 text-sm md:text-medium'>
            <div className='w-[23%] my-2 px-3 py-5'>{formatDate(forecast.dt_txt)}</div>
            <div className='w-[23%] capitalize '>{forecast.weather[0].description}</div>
            <div className='w-[23%] flex items-center justify-center'><img className='w-10 h-10 brightness-200 ' src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}/></div>
            <div className='w-[23%] '>{forecast.main.temp_min}° / {forecast.main.temp_max}°</div>
          </div>
        ))
       }
     </div>
    </div>
  )
}



function formatDate(dt_txt) {
    const date = new Date(dt_txt); // Convert dt_txt to a Date object

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const month = months[date.getMonth()];

    return `${day}, ${dateNum} ${month}`;
}