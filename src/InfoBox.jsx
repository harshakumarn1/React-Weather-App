import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({ info }) {

  const COLD_URL = 'https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const RAIN_URL = 'https://images.unsplash.com/photo-1603041592657-0709d7796f44?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const HOT_URL = 'https://images.unsplash.com/photo-1521223619409-8085d2607891?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    
  return (
        <div className="InfoBox">
            <h2>Weather Info</h2>
        
            <Card sx={{ maxWidth: 345 }}>
            
              <CardActionArea>
              <CardMedia
              component="img"
              height="140"
              image={info.humidity > 70 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
              alt="green iguana"
              />
            
             <CardContent>
             <div className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  {info.city}
                </Typography>
             
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                <div className="info">
                <div>Temperature = {info.temp}&deg;C</div>
                <div>MaximumTemperature = {info.maxTemp}&deg;C</div>
                <div>MinimumTemperature = {info.minTemp}&deg;C</div>
                <div>Humidity = {info.humidity}</div>
                <div>Weather in {info.city} is described as {info.weather}.</div>
                </div>
               </Typography>
               </div>
            </CardContent>        
            </CardActionArea>        
            </Card>
        </div>
    )
}