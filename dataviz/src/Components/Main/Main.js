import React, { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";
import "./Main.css";
import axios from "axios";
import Map from '../Map/Map';
import Pollution from "../Pollution/Pollution";



function Main (){


let currentTime = new Date().getHours();
const [time, setTime] = useState(currentTime);
const updateTime = () => {
   let currentTime = new Date().getHours();
   setTime(currentTime);
}

useEffect(()=> {
  setInterval(updateTime, 3.6e+6);
})
console.log(currentTime)

 if (time < 12 && time >= 0){

  return (
    <div className="main-container-morning">
      <section className="pollution">
      <Pollution><p id="root"></p> </Pollution>
        
      </section>
      <section className="map">
 
      < Map > </Map>

      </section>
    </div>
    )

} else  if (time >= 12 && time <= 18){

  return (
    <div className="main-container-afternoon">
         <section className="pollution">
        
         <Pollution><p id="root"></p> </Pollution>
      </section>
      <section className="map">
 
      < Map > </Map>

      </section>
    </div>
    )
} else {

  return (
    <div className="main-container-night">
        <section className="pollution">
        
        <Pollution><p id="root"></p> </Pollution>
      </section>
      <section className="map">
 
    < Map > </Map>

 </section>
    </div>
    )
}
}



export default Main ; 
