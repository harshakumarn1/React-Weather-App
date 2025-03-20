import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    
    let [city, setcity] = useState("");
    let [error, seterror] = useState("");

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = '9588240c76ead732387d9ff0b24b75f7';
        const getWeatherInfo = async () => {
            try {
                let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
                response = await response.json();
                let result = {
                    city: city,
                    temp: response.main.temp,
                    minTemp: response.main.temp_min,
                    maxTemp: response.main.temp_max,
                    humidity: response.main.humidity,
                    weather: response.weather[0].description
                }
                // console.log(result);
                return result;
            } catch (error) {
                throw error;
            }

            } 

    let handleChange = (event) => {
        setcity((city) => {
            return event.target.value;
        })
    }
    
    let handleFormSubmission = async (event) => {
        try {
            event.preventDefault();
            // console.log(city);
            const newInfo = await getWeatherInfo();
            console.log(newInfo);
            setcity("");
            updateInfo(newInfo);
        } catch (error) {
            setcity("");
            seterror("Sorry! we don't have Weather deatils for this place.");
        }

    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleFormSubmission}>
               <TextField id="outlined-basic" label="City name" variant="outlined" name="city" value={city} onChange={handleChange} required/> <br /> <br />
               <Button variant="contained" type="submit">Search</Button> 
            </form>
            {error != "" ? <p style={{color: "red"}}>{error}</p> : null }
        </div>
    )
}