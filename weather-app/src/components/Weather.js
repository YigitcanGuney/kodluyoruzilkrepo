import {useEffect} from 'react'

import {UseWeather} from '../context/WeatherContext'

import cities from '../cities.json'

const icons ="http://openweathermap.org/img/wn";


const tempreture = (tempreture) => {
    return Math.floor(tempreture-271)
}



const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const date = new Date();

function dayName () {
    return days[date.getDay()]


}

const onSubmit = (e) => {
    return e.target.value
}



function Weather() {
    const {weather, setWeather} = UseWeather();


    useEffect(() => {

        if(weather){
          console.log(weather)
        }
      }, [weather])


    return (
    <>
        <div className="content">
            <h1>HAVA DURMU</h1>
            <select onClick={(e) => {   
                weather.name = onSubmit(e)
                setWeather({...weather, name : weather.name})

                console.log(weather)
            } }  className="selectcity" name="city" id="city">
                {
                    weather &&
                    cities.map(item =>(
                        <option key={item.id} value={item.name.toLocaleLowerCase()}>{item.name}</option>
                    ))
                }
               
            </select>

            <div className="weather-container">
                    {
                    weather &&
                        <>
                       <div className="weather-card">
                        <h2>{weather.name}</h2>
                        <h5>{dayName()}</h5>
                        <img src={`${icons}/${weather.weather[0].icon}@2x.png`} alt="" />
                        <div className="tempreture">
                           <h5 className="current">
                               Cur :
                               {
                                   tempreture(weather.main.temp)
                               }
                           </h5>
                           <span className="max">
                               Max:
                               {
                                   tempreture(weather.main.temp_max)
                               }
                           </span>
                           <span className="min">
                               Min:
                               {
                                   tempreture(weather.main.temp_min)
                               }
                           </span>
                        </div>
                       </div>
                       
                    </>
                    }
                </div>
        </div>
    </>
    )
}

export default Weather
