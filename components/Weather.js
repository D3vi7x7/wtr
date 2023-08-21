import React from 'react'
import Image from 'next/image'

const Weather = ({data}) => {
    console.log(data)
  return (
    <>
    <div className='bg-white/40 rounded-lg mt-12 p-6 flex relative w-full max-w-[500px] m-auto justify-between items-center z-10'>
      <div>
        <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt='/'
        width={200}
        height={200}
        />
        <h1 className='text-white text-2xl font-semibold ml-12'>{data.weather[0].main}</h1>
      </div>
      <h1 className='text-white text-9xl font-semibold mr-7'>{data.main.temp.toFixed(0)}&#176;F</h1>
      
    </div>
    <div>
    
     <div className='flex text-white bg-black/40 rounded-lg mt-36 p-8 relative w-full max-w-[500px] m-auto justify-between items-center z-10'>
        
      <div className='flex ml-3 gap-28'>
        <div className='text-center'>
            <h1>Humidity</h1>
            <h1 className='font-bold'>{data.main.humidity}%</h1>
        </div>
        <div className='text-center'>
            <h1>Feels Like</h1>
            <h1 className='font-bold'>{data.main.feels_like}&#176;F</h1>
        </div>
        <div className='text-center'>
            <h1>Pressure</h1>
            <h1 className='font-bold'>{data.main.pressure}Pa</h1>
        </div>
       </div>
     </div>
    </div>
    </>
  )
}

export default Weather