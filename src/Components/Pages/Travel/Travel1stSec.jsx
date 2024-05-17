import React, { useEffect, useState } from 'react'

const Travel1stSec = () => {

  const [datas, setData] = useState([]);


  useEffect(() => {
    // Fetch data from JSON file
    fetch('/TravelArraay.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className='my-10'>
<div className=' grid lg:grid-cols-4 grid-cols-1 gap-20  p-4'>
  {
    datas?.map(data=>
      <>
      <div className='grid grid-cols-1 gap-10 '>
      <img src={data.picUrl} alt="" className='h-72 w-56 shadow-lg shadow-slate-500 cursor-pointer hover:-translate-y-2 duration-300 delay-200 transition-transform ease-linear' />
      <h1 className='text-center font-medium text-gray-500 text-lg'>{data.title}</h1>
      <button className='hover:-translate-y-1 duration-300 delay-200 transition-transform ease-linear cursor-pointer px-5 py-2 rounded-full  bg-teal-600 text-white font-medium'>View Details</button>
      </div>
      </>
    )
  }
</div>

    </div>
  )
}


export default Travel1stSec