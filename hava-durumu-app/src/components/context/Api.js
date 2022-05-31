import { createContext, useContext } from "react";
import axios from 'axios';


const ApiContext = createContext();

export const ApiProvider =  ({ children }) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const { data } =  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=51.5098&lon=-0.1180&units=metric&exclude=current,minutely,hourly,alerts&lang=tr&appid=${key}`);
    

    const values = { data };
    return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

export const Api = () => useContext(ApiContext)