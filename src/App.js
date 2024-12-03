import React from "react";
import WeatherDashboard from "./components/WeatherDashboard";
import "./index.css"
import { Toaster } from "sonner";
function App() {
  return (

<div className=" inset-0 -z-10 min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
   <div className=" ">
   <h1 className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-700 text-center my-4">Weather Dashboard</h1>
   <WeatherDashboard />
   </div>
</div>
     
  );
}

export default App;
