import React from 'react'
import "./style.css"

function HavaDurumu({ ilkGun, ikinciGun, ucuncuGun, dorduncuGun, besinciGun, altıncıGun, yedinciGun }) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    //console.log(day);
    let day1=""
    let day2=""
    let day3=""
    let day4=""
    let day5=""
    let day6=""
    let day7=""
    if (day==="Sunday") {
        day1="Pazar"
        day2="Pazartesi"
        day3="Salı"
        day4="Çarşamba"
        day5="Perşembe"
        day6="Cuma"
        day7="Cumartesi"
    
       }
   if (day==="Monday") {
    day1="Pazartesi"
    day2="Salı"
    day3="Çarşamba"
    day4="Perşembe"
    day5="Cuma"
    day6="Cumartesi"
    day7="Pazar"

   }
   if (day==="Tuesday") {
    day1="Salı"
    day2="Çarşamba"
    day3="Perşembe"
    day4="Cuma"
    day5="Cumartesi"
    day6="Pazar"
    day7="Pazartesi"

   }
   if (day==="Wednesday") {
    day1="Çarşamba"
    day2="Perşembe"
    day3="Cuma"
    day4="Cumartesi"
    day5="Pazar"
    day6="Pazartesi"
    day7="Salı"

   }
   if (day==="Thursday") {
    day1="Perşembe"
    day2="Cuma"
    day3="Cumartesi"
    day4="Pazar"
    day5="Pazartesi"
    day6="Salı"
    day7="Çarşamba"

   }
   if (day==="Friday") {
    day1="Cuma"
    day2="Cumartesi"
    day3="Pazar"
    day4="Pazartesi"
    day5="Salı"
    day6="Çarşamba"
    day7="Perşembe"

   }
   if (day==="Saturday") {
    day1="Cumartesi"
    day2="Pazar"
    day3="Pazartesi"
    day4="Salı"
    day5="Çarşamba"
    day6="Perşembe"
    day7="Cuma"

   }
            

    return (
        <div>
            <ul>
                <li className='group group1'>
                {ilkGun[1] && <h3 >{day1}</h3>}
                    {ilkGun[3]&&<img src={`http://openweathermap.org/img/wn/${ilkGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{ilkGun[0]}</h4>
                    {ilkGun[1] && <h3>{ilkGun[1]} °C</h3>}
                   {ilkGun[1]&& <p>{ilkGun[2]}/{ilkGun[1]}</p>}
                </li>
                <li className='group'>
                {ikinciGun[1] &&<h3>{day2}</h3>}
                {ikinciGun[3]&&<img src={`http://openweathermap.org/img/wn/${ikinciGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{ikinciGun[0]}</h4>
                    {ikinciGun[1] && <h3>{ikinciGun[1]} °C</h3>}
                    {ikinciGun[1]&& <p>{ikinciGun[2]}/{ikinciGun[1]}</p>}
                </li>
                <li className='group'>
                {ucuncuGun[1] && <h3>{day3}</h3>}
                {ucuncuGun[3]&&<img src={`http://openweathermap.org/img/wn/${ucuncuGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{ucuncuGun[0]}</h4>
                    {ucuncuGun[1] && <h3>{ucuncuGun[1]} °C</h3>}
                    {ucuncuGun[1]&& <p>{ucuncuGun[2]}/{ucuncuGun[1]}</p>}
                </li>
                <li className='group'>
                {dorduncuGun[1] &&<h3>{day4}</h3>}
                {dorduncuGun[3]&&<img src={`http://openweathermap.org/img/wn/${dorduncuGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{dorduncuGun[0]}</h4>
                    {dorduncuGun[1] && <h3>{dorduncuGun[1]} °C</h3>}
                    {dorduncuGun[1]&& <p>{dorduncuGun[2]}/{dorduncuGun[1]}</p>}
                </li>
                <li className='group'>
                {besinciGun[1] &&  <h3>{day5}</h3>}
                {besinciGun[3]&&<img src={`http://openweathermap.org/img/wn/${besinciGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{besinciGun[0]}</h4>
                    {besinciGun[1] && <h3>{besinciGun[1]} °C</h3>}
                    {besinciGun[1]&& <p>{besinciGun[2]}/{besinciGun[1]}</p>}
                </li>
                <li className='group'>
                {altıncıGun[1] &&  <h3>{day6}</h3>}
                {altıncıGun[3]&&<img src={`http://openweathermap.org/img/wn/${altıncıGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{altıncıGun[0]}</h4>
                    {altıncıGun[1] && <h3>{altıncıGun[1]} °C</h3>}
                    {altıncıGun[1]&& <p>{altıncıGun[2]}/{altıncıGun[1]}</p>}
                </li>
                <li className='group'>
                {yedinciGun[1] &&<h3>{day7}</h3>}
                {yedinciGun[3]&&<img src={`http://openweathermap.org/img/wn/${yedinciGun[3]}@2x.png`}
                  alt="Weather Icon" />}
                    <h4>{yedinciGun[0]}</h4>
                    {yedinciGun[1] && <h3>{yedinciGun[1]} °C</h3>}
                    {yedinciGun[1]&& <p>{yedinciGun[2]}/{yedinciGun[1]}</p>}
                </li>
            </ul>
        </div>
    )
}

export default HavaDurumu