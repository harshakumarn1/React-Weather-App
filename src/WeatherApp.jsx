import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {

    let [weatherInfo, setweatherInfo] = useState({
        city: "bengaluru",
        humidity: 42,
        maxTemp: 31.32,
        minTemp: 29.5,
        temp: 30.35,
        weather: "clear sky"
    })

    let updateInfo = (info) => {
        setweatherInfo(info);
    }

    return (
        <>
            <h2 style={{textAlign: "center"}}>Weather App</h2>
            < SearchBox updateInfo={updateInfo}/>
            < InfoBox info={weatherInfo}/>
        </>
    )
}