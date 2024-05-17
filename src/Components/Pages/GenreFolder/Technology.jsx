import Tech1stSec from "../Tech/Tech1stSec"
import Tech2ndSec from "../Tech/Tech2ndSec"

const Technology = () => {
  return (
    <div className="max-w-5xl mx-auto">

<div className="h-72  mx-auto bg-contain flex justify-center items-center "
style={{ backgroundImage: `url("https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`, 
backgroundRepeat:'no-repeat',
backgroundPosition:'left',
backgroundSize:'cover'

}}
>
  
    <h1 className="font-semibold text-gray-100 text-center text-3xl"><span className="font-extrabold text-5xl">'</span>Technology <span className="font-extrabold text-5xl">'</span></h1>

</div>

<Tech1stSec></Tech1stSec>
<Tech2ndSec></Tech2ndSec>
    </div>
  )
}

export default Technology