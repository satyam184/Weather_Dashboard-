import React from 'react'

const weathers = [
    {
        name: "clear",
        icon: "./assets/clear.png",
    },
    {
        name: "clouds",
        icon: "./assets/cloud.png",
    },
    {
        name: "rain",
        icon: "./assets/rain.png",
    },
    {
        name: "drizzle",
        icon: "./assets/drizzle.png",
    },
    {
        name: "snow",
        icon: "./assets/snow.png",
    },
    {
        name: "thunderstorm",
        icon: "./assets/thunderstorm.png",
    },
    {
        name: "mist",
        icon: "./assets/mist.png",
    },
    {
        name: "smoke",
        icon: "./assets/smoke.png",
    },
    {
        name: "haze",
        icon: "./assets/haze.png",
    },
    {
        name: "dust",
        icon: "./assets/dust.png",
    },
    {
        name: "fog",
        icon: "./assets/fog.png",
    },
    {
        name: "sand",
        icon: "./assets/sand.png",
    },
    {
        name: "ash",
        icon: "./assets/ash.png",
    },
    {
        name: "squall",
        icon: "./assets/squall.png",
    },
    {
        name: "tornado",
        icon: "./assets/tornado.png",
    },
];

function getCurrentDateFormatted() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const now = new Date();
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    return `${dayName} ${day} ${monthName} ${year}`;
}


export default function WeatherCard({city,unit}) {
    const  tempC = city.main.temp; 
    const tempF =(city.main.temp * 9/5 + 32).toFixed(2);
   const formatedDate =getCurrentDateFormatted() ;
   
  return (
    <div className="flex items-center justify-center p-2 shadow-md rounded-lg md:p-5" >
    <div className="flex flex-col bg-white rounded-lg p-4 w-full ">
                            <div className="ml-2 mt-3 font-bold text-xl md:text-3xl">{city.name}</div>
                            <div className="ml-2  text-sm text-gray-500">{formatedDate}</div>
                            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-28 w-28">
    {weathers.map((weather, index) => {
        if(weather.name === (city.weather[0].main).toLowerCase()) {
            return <img key={index} src={weather.icon} alt={weather.name} className="h-full w-full" />
        }
    })}

                            </div>
                            <div className="flex flex-col items-center justify-center capitalize text-xl text-gray-400 font-thin">
                                    <div>{city.weather[0].description}</div>
                                </div>
                            <div className="flex flex-row items-center justify-center mt-6">
                                <div className="font-medium text-5xl">{unit === "metric" ? tempC+"°" : tempF+"°"} 
                                {unit === "metric" ? <span className='font-thin text-3xl'>C</span>:<span className='font-thin text-3xl'>F</span> } 
                                </div>
                                
                            </div>
                            <div className="flex flex-row justify-between mt-6">
                                <div className="flex flex-col items-center">
                                    <div className="font-medium ">Wind</div>
                                    <div className=" text-gray-500">{city.wind.speed} k/h</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="font-medium ">Humidity</div>
                                    <div className=" text-gray-500">{city.main.humidity}%</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="font-medium ">Pressure</div>
                                    <div className=" text-gray-500">{city.main.pressure} hPa</div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}
