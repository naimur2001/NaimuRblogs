import { Link } from "react-router-dom"

const ThirdSection = () => {
  return (
    <div>
<div className="max-w-5xl mx-auto mb-5">
  <div className="main  shadow-2xl shadow-slate-300 lg:p-4 p-2 rounded-lg">
<div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-5">
  <div className="border-2 border-t-transparent border-b-transparent border-l-transparent border-r-slate-400">
    <img src="https://media.licdn.com/dms/image/D5603AQFa2doy0lQleQ/profile-displayphoto-shrink_800_800/0/1709455997907?e=1721260800&v=beta&t=8M4jEp4Wjo174X21XNeWPGOpg-NWWPVElwNh4OnrbBE" className="h-96 w-96 rounded-lg" alt="" />
  </div>
  <div className="grid grid-cols-1 gap-2 ">
    <h1 className="lg:text-2xl text-xl  font-bold text-gray-400">NAIMUR RAHMAN</h1>
    <p className=" text-xl font-sign">Naimur, a software engineering student, is fueled by his passion for technology, travel, and geopolitics. He eagerly explores the connections between these diverse interests, finding inspiration in the intersections of culture, innovation, and global affairs.</p>
    <Link to={"/about"}>
      <button className="p-2 border-2 border-gray-400 rounded-2xl text-base  font-semibold">Explore Further</button>
    </Link>
  </div>
</div>
  </div>
</div>


    </div>
  )
}

export default ThirdSection