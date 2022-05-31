import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./style.css"
import { Sehirler } from "./context/Sehirler"
import { usePosition } from 'use-position';

function Dropdown({ setIlkGun, setIkinciGun, setUcuncuGun, setDorduncuGun, setBesinciGun, setAltıncıGun, setYedinciGun }) {
  const [sehirIsmi, setSehirIsmı] = useState("Şehirler")
  const { sehir } = Sehirler();
  const {latitude, longitude} =usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&lang=tr&appid=${key}`);
    
    setIlkGun([data.daily[0].weather[0].description, data.daily[0].temp.max, data.daily[0].temp.min, data.daily[0].weather[0].icon])
    setIkinciGun([data.daily[1].weather[0].description, data.daily[1].temp.max, data.daily[1].temp.min, data.daily[1].weather[0].icon])
    setUcuncuGun([data.daily[2].weather[0].description, data.daily[2].temp.max, data.daily[2].temp.min, data.daily[2].weather[0].icon])
    setDorduncuGun([data.daily[3].weather[0].description, data.daily[3].temp.max, data.daily[3].temp.min, data.daily[3].weather[0].icon])
    setBesinciGun([data.daily[4].weather[0].description, data.daily[4].temp.max, data.daily[4].temp.min, data.daily[4].weather[0].icon])
    setAltıncıGun([data.daily[5].weather[0].description, data.daily[5].temp.max, data.daily[5].temp.min, data.daily[5].weather[0].icon])
    setYedinciGun([data.daily[6].weather[0].description, data.daily[6].temp.max, data.daily[6].temp.min, data.daily[6].weather[0].icon])
    //console.log(data.daily);
  }
  useEffect(()=>{
    latitude&& longitude&& getWeatherData(latitude,longitude)
  },[latitude,longitude])

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {sehirIsmi}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.0000, 35.3213); setSehirIsmı(sehir[1]) }}>{sehir[1]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.7648, 38.2786); setSehirIsmı(sehir[2]) }} >{sehir[2]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.7507, 30.5567); setSehirIsmı(sehir[3]) }} >{sehir[3]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.7191, 43.0503); setSehirIsmı(sehir[4]) }}>{sehir[4]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.6499, 35.8353); setSehirIsmı(sehir[5]) }} >{sehir[5]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.9208,32.8541 ); setSehirIsmı(sehir[6]) }}>{sehir[6]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(36.8841, 30.7056); setSehirIsmı(sehir[7]) }} >{sehir[7]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.1828, 41.8183); setSehirIsmı(sehir[8]) }} >{sehir[8]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.8560,27.8416 ); setSehirIsmı(sehir[9]) }} >{sehir[9]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.6484, 27.8826); setSehirIsmı(sehir[10]) }} >{sehir[10]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.0567,30.0665 ); setSehirIsmı(sehir[11]) }}>{sehir[11]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.0626, 40.7696); setSehirIsmı(sehir[12]) }} >{sehir[12]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.3938, 42.1232); setSehirIsmı(sehir[13]) }}>{sehir[13]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.5760, 31.5788); setSehirIsmı(sehir[14]) }} >{sehir[14]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.4613, 30.0665); setSehirIsmı(sehir[15]) }} >{sehir[15]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.2669, 29.0634); setSehirIsmı(sehir[16]) }}>{sehir[16]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.1553,26.4142 ); setSehirIsmı(sehir[17]) }}>{sehir[17]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.6013,33.6134 ); setSehirIsmı(sehir[18]) }} >{sehir[18]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.5506,34.9556 ); setSehirIsmı(sehir[19]) }} >{sehir[19]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.7765, 29.0864); setSehirIsmı(sehir[20]) }} >{sehir[20]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.9144,40.2306 ); setSehirIsmı(sehir[21]) }} >{sehir[21]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.6818,26.5623 ); setSehirIsmı(sehir[22]) }} >{sehir[22]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.6810, 39.2264); setSehirIsmı(sehir[23]) }} >{sehir[23]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.7500, 39.5000); setSehirIsmı(sehir[24]) }} >{sehir[24]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.9000, 41.2700); setSehirIsmı(sehir[25]) }}>{sehir[25]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.7767, 30.5206); setSehirIsmı(sehir[26]) }} >{sehir[26]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.0662, 37.3833); setSehirIsmı(sehir[27]) }} >{sehir[27]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.9128, 38.3895); setSehirIsmı(sehir[28]) }} >{sehir[28]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.4386, 39.5086); setSehirIsmı(sehir[29]) }} >{sehir[29]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.5833, 43.7333); setSehirIsmı(sehir[30]) }}>{sehir[30]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(36.4018,36.3498 ); setSehirIsmı(sehir[31]) }}>{sehir[31]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.7648, 30.5566); setSehirIsmı(sehir[32]) }}>{sehir[32]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(36.8000, 34.6333); setSehirIsmı(sehir[33]) }}>{sehir[33]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.0053, 28.9770); setSehirIsmı(sehir[34]) }}>{sehir[34]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.4189,27.1287 ); setSehirIsmı(sehir[35]) }}>{sehir[35]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.6167, 43.1000); setSehirIsmı(sehir[36]) }}>{sehir[36]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.3887,33.7827 ); setSehirIsmı(sehir[37]) }}>{sehir[37]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.7312, 35.4787); setSehirIsmı(sehir[38]) }} >{sehir[38]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.7333, 27.2167); setSehirIsmı(sehir[39]) }}>{sehir[39]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.1425, 34.1709); setSehirIsmı(sehir[40]) }}>{sehir[40]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.8533,29.8815 ); setSehirIsmı(sehir[41]) }}>{sehir[41]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.8667, 32.4833); setSehirIsmı(sehir[42]) }}>{sehir[42]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.4167,29.9833 ); setSehirIsmı(sehir[43]) }} >{sehir[43]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.3552, 38.3095); setSehirIsmı(sehir[44]) }} >{sehir[44]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.6191, 27.4289); setSehirIsmı(sehir[45]) }} >{sehir[45]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.5858,36.9371 ); setSehirIsmı(sehir[46]) }} >{sehir[46]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.3212, 40.7245); setSehirIsmı(sehir[47]) }}>{sehir[47]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.2153, 28.3636); setSehirIsmı(sehir[48]) }}>{sehir[48]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.9462, 41.7539); setSehirIsmı(sehir[49]) }}>{sehir[49]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.6939, 34.6857); setSehirIsmı(sehir[50]) }}>{sehir[50]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.9667, 34.6833); setSehirIsmı(sehir[51]) }}>{sehir[51]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.9839,37.8764 ); setSehirIsmı(sehir[52]) }}>{sehir[52]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.0201, 40.5234); setSehirIsmı(sehir[53]) }}>{sehir[53]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.6940, 30.4358); setSehirIsmı(sehir[54]) }}>{sehir[54]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.2928, 36.3313); setSehirIsmı(sehir[55]) }}>{sehir[55]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.9333, 41.9500); setSehirIsmı(sehir[56]) }} >{sehir[56]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(42.0231, 35.1531); setSehirIsmı(sehir[57]) }} >{sehir[57]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.7477, 37.0179); setSehirIsmı(sehir[58]) }} >{sehir[58]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.9833, 27.5167); setSehirIsmı(sehir[59]) }} >{sehir[59]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.3167, 36.5500); setSehirIsmı(sehir[60]) }} >{sehir[60]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.0015, 39.7178); setSehirIsmı(sehir[61]) }} >{sehir[61]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.3074, 39.4388); setSehirIsmı(sehir[62]) }}>{sehir[62]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.1591, 38.7969); setSehirIsmı(sehir[63]) }}>{sehir[63]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.6823, 29.4082); setSehirIsmı(sehir[64]) }} >{sehir[64]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.4891, 43.4089); setSehirIsmı(sehir[65]) }} >{sehir[65]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.8181, 34.8147); setSehirIsmı(sehir[66]) }} >{sehir[66]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.4564, 31.7987); setSehirIsmı(sehir[67]) }} >{sehir[67]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(38.3687,34.0370 ); setSehirIsmı(sehir[68]) }} >{sehir[68]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.2552, 40.2249); setSehirIsmı(sehir[69]) }} >{sehir[69]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.1759,33.2287 ); setSehirIsmı(sehir[70]) }}>{sehir[70]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.8468,33.5153 ); setSehirIsmı(sehir[71]) }}>{sehir[71]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.8812, 41.1351); setSehirIsmı(sehir[72]) }}>{sehir[72]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.4187, 42.4918); setSehirIsmı(sehir[73]) }} >{sehir[73]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.5811, 32.4610); setSehirIsmı(sehir[74]) }} >{sehir[74]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.1105, 42.7022); setSehirIsmı(sehir[75]) }} >{sehir[75]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(39.8880, 44.0048); setSehirIsmı(sehir[76]) }} >{sehir[76]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.6500, 29.2667); setSehirIsmı(sehir[77]) }} >{sehir[77]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(41.2061, 32.6204); setSehirIsmı(sehir[78]) }}>{sehir[78]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(36.7184,37.1212 ); setSehirIsmı(sehir[79]) }}>{sehir[79]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(37.2130,36.1763 ); setSehirIsmı(sehir[80]) }}>{sehir[80]}</button></li>
        <li><button className="dropdown-item" onClick={() => { getWeatherData(40.8438, 31.1565); setSehirIsmı(sehir[81]) }} >{sehir[81]}</button></li>

      </ul>
    </div>
  )
}

export default Dropdown