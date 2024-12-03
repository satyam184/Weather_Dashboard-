import React, { useState } from "react";
import axios from "axios";
import { getWeather } from "../controllers/weather";
import { toast } from "sonner";

function Search({ setCurrentCity, unit }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
        

    try {
      const data  =  await getWeather(query, unit) ;
      setCurrentCity(data);
      localStorage.setItem("lastCity", JSON.stringify({ city:query,unit}))
      console.log(data);
      toast.success("Got it !!") ;
    } 
  catch (error) {
      setCurrentCity(null);
      toast.error(error.message)
    }
  };

  return (
    <div className="search  ">



      <div className='w-full mx-2 md:w-[500px] '>
    <div className="relative flex items-center w-full h-12 rounded-full pl-5 shadow-md focus-within:shadow-lg bg-white overflow-hidden px-2">
        <button 
         onClick={handleSearch}
         className="absolute right-2 flex justify-center items-center h-10 w-10  text-gray-300 hover:bg-purple-200 rounded-full transition-all duration-200 ease-linear ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e)=>{if(e.key==="Enter"){
          handleSearch();
        }}}
        placeholder="Enter city name" /> 
    </div>
</div>
    </div>
  );
}

export default Search;
