'use client';

import React from 'react'
import axios from 'axios';
import Image from 'next/image'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import Weather from './Weather';


const Top = () => {
    const [city,setCity] = useState('');
  const [weatherdata,setWeatherdata] = useState({});

  const getWeather = async () => {
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=d096ff04439f25db72c21ab0e7ac5f0a`)
      //console.log(response.data)
      setWeatherdata(response.data)
      //console.log(weatherdata)
    }catch(error){
      console.log(error);
    }
  }


  
  console.log(city)
  return (
    <div>
        <Image src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
      layout='fill' />
      
      <div className='relative flex text-white justify-between items-center m-auto mt-10 p-4 border border-gray-400 rounded-md w-full max-w-[500px] z-10'>
        <input onChange={(e) => setCity(e.target.value)} type='text' placeholder='Search city' className='bg-transparent w-full justify-between items-center focus:outline-none'/>
      <button onClick={getWeather} className=''><BsSearch size={20}/></button>
      </div>

      {weatherdata.main && <Weather data={weatherdata}/>}
    </div>
  )
}

export default Top