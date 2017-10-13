import axios from "axios";
const API_KEY = "27459d8c6b10a40df7207a7e9762366c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country){
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

    return{
        type : FETCH_WEATHER,
        payload: request
    };
}