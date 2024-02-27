import React, { useState } from 'react'
import Axios from 'axios'
import './App.css';


const KEY = 'bc2e3edd005e418081408851680f5a43';



const App = () => {

  const [city,setCity] = useState('');
  const [data,setData] = useState('');

  const fetchData = async () => {

    try{
      const response =await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      setData(response.data);
    }
    catch(err){
      alert('please enter the city');
    }
    

  }
  return (
    <div className = 'App'>
      <h1 className = 'title'>Weather app</h1>
      <div className ='input-container'>
        <input 

        type ="text"
        className ='input'
        value ={city}
        onChange ={e => setCity(e.target.value)}
        placeholder='Enter the city name'
        
        />
      <button className="button" onClick={fetchData}>Fetch</button>
    </div>

    <div>
      {data && (
        <div className = 'container'>
          <h1 className ='city-name'>{data.name},{data.sys.country}</h1>
          <div className ='weather-info'>
            <div className='temp'>{Math.round(data.main.temp)}C</div>
            <div className = 'coordinated'>
              <div>Lat - {data.coord.lat}</div>
              <div>Lon - {data.coord.lon}</div>

            </div>

          </div>
           
        </div>

      )}

    </div>
    
    </div>
      
  )
}

export default App
