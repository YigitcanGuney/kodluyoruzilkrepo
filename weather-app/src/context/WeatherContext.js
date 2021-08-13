import{ createContext , useContext, useState, useEffect} from 'react'
import axios from 'axios'

const WeatherContext = createContext();

const API_KEY = "39555c7f84ca4a097bfab2b5a2cbd202"
const city = "ordu"

export const WeatherProvider = ({children}) => {

    const [weather, setWeather] = useState();

    useEffect(() => {
        axios("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+API_KEY)
    .then(res => setWeather(res.data))
    }, [city])

    const values = {
        weather,
        setWeather
    }


    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const UseWeather = () => useContext(WeatherContext)
