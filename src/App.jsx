// import React from 'react'
import axios from "axios"
import {useState } from "react"
function App() {

  const [myValue, setmyValue] = useState("")
     const [data, setdata] = useState([])
     const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${myValue}&appid=2116fe3228e2e006d6cc656d47b52ee7`

        const searchlocation =(e)=>{
          if (e.key === "Enter"){
               axios.get(endpoint).then((response)=>{
                    console.log(response.data)
                    setdata(response.data)
                }).catch((err)=>{
                    console.log(err)
                })
                setmyValue("")
          }
  return (
    <>
      <div>
        <input type="text"
          value={myValue}
          className=" input"
          onKeyPress={searchlocation}
          onChange={(e)=>setmyValue(e.target.value)}
          placeholder="Search City"
        />
     {data && (
        <>
          <div className="container-fluid mx-auto">
            <h1 className="text-white">{data.name}</h1>
            {data.main?<p>{data.main.temp}°C</p> :null}
          </div>
        </>
      )}
      </div>
    </>
  )
}
}

export default App



{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
