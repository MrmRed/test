const API_KEY = "b1b15e88fa797225412429c1c50c122a1";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
    return{
        type : FETCH_WEATHER
    };
}