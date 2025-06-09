import  {useState} from 'react'
import axios from 'axios'
import './App.css'

const Weather = () => {
     const [myValue, setmyValue] = useState("")
     const [data, setdata] = useState([])
     const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${myValue}&appid=2116fe3228e2e006d6cc656d47b52ee7`


     const searchlocation = (e) =>{
         if (e.key === "Enter") {
          axios.get(endpoint).then((response)=>{
               console.log(response)
               setdata(response.data)
          }).catch((err)=>{
               console.log(err)
          })
          setmyValue("")
         }
     }
  return (
    <>
          <input type="text"
          value={myValue}
          onKeyPress={searchlocation} 
          onChange={(e)=>setmyValue(e.target.value)} 
          className='input ' 
          placeholder='SEARCH CITY' />

     
     {data && (
     <main className="main">
          <div className="summary-left">
               <div className="summary-content">
                    <h1>{data.sys?.country},{data.name}</h1>
                    <p><strong>{data.main?.temp}°C</strong></p>
               </div>
          </div>

          <div className="content">
               <h2>{data.name}, {data.sys?.country}</h2>
               <p><strong>Temperature:</strong> {data.main?.temp}°C</p>
               <p><strong>Weather:</strong> {data.weather?.[0]?.description}</p>
               <p><strong>Humidity:</strong> {data.main?.humidity}%</p>
               <p><strong>Pressure:</strong> {data.main?.pressure} hPa</p>
               <p><strong>Wind Speed:</strong> {data.wind?.speed} m/s</p>
               <p><strong>Sea Level:</strong> {data.main?.sea_level ?? 'N/A'} m</p>
               <p><strong>Coordinates:</strong> {data.coord?.lat}, {data.coord?.lon}</p>
          </div>
     </main>

      )}
    </>
  )
}

export default Weather
