import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const TechDetails = () => {
  const {id}=useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch('/TechArray.json')
      .then(response => response.json())
      .then(allData => {
        // Find the specific item by id
        const specificData = allData.find(item => item.id === parseInt(id, 10));
        setData(specificData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);
  return (
    <div >
      <div className="max-w-5xl mx-auto nt-10">

        <div>
          <h1 className='text-2xl font-semibold text-gray-400 text-center my-5'>{data.title}</h1>
         
          <div className="main grid lg:grid-cols-2 grid-cols-1 gap-10 p-4">
    
    <div className="flex flex-col justify-center items-center gap-5">
    
<p className="font-medium text-black">{data.description}</p>

    </div>
    <div>
    <div className="">
    <img src={data.picUrl} className="lg:h-[550px] lg:w-[400px] " alt="" />
    
    </div>
    </div>
    </div>
          
        </div>

</div>
    
    </div>
  )
}

export default TechDetails