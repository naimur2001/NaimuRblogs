import Travel1stSec from "../Travel/Travel1stSec"
import Travel2ndSec from "../Travel/Travel2ndSec"

const Travel = () => {
  return (
    <div>
       <div className="max-w-5xl mx-auto">

<div className="h-72  mx-auto bg-contain flex justify-center items-center "
style={{ backgroundImage: `url("https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, 
backgroundRepeat:'no-repeat',
backgroundPosition:'left',
backgroundSize:'cover'

}}
>
  
    <h1 className="font-semibold text-gray-100 text-center text-3xl"><span className="font-extrabold text-5xl">'</span>Travel <span className="font-extrabold text-5xl">'</span></h1>

</div>

<Travel1stSec></Travel1stSec>
<Travel2ndSec></Travel2ndSec>

    </div>
    </div>
  )
}

export default Travel