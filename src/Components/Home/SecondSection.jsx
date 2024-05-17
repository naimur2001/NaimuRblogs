
const SecondSection = () => {
  const experiences = [
    {
      id: 3,
      title: "Backbenchersithous.com",
      description: "Developed this website to facilitate a IT Company. It was a big and team project. Working with a large team member and beang a part of them was so nice and unexpected. Got many experienced.",
      topic: "tech",
      picUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "1$ Project",
      description: "As Software Engineering student done a precious stuff, built a website to support charity organization. From this project gained many specific thing and experience.",
      topic: "tech",
      picUrl: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 1,
      title: "Kolkata Tour",
      description: "Exploring the rich culture and history of India.",
      topic: "Travel",
      picUrl:"https://images.pexels.com/photos/16565204/pexels-photo-16565204/free-photo-of-victoria-memorial-in-kolkata.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "China Tour",
      description: "Experiencing the vast landscapes and diverse traditions of China. A land of potentiality. Enjoyed a lot.",
      topic: "Travel",
      picUrl: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Recent Elecetion by BD",
      description: "General elections were held in Bangladesh on 7 January 2024. The current term of the perliament on 29 January 2024. The Awami League, led by Sheikh Hasina, won the election for the fourth consecutive time with less than 40% of the eligible voters voting according to an Election Commission. But Truth is 90% People boycotted it.",
      topic: "geopol", 
      picUrl: "https://images.pexels.com/photos/2382896/pexels-photo-2382896.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6, 
      title: "No Humanity in Gaza",
      description: "The Israeli–Palestinian conflict is an ongoing military and political conflict about land and self-determination within the territory of the former Mandatory Palestine. Israel acceompleshing 'Genocide' one after one. World is now on cruelt mode. Pray for Palestine.",
      topic: "Category", 
      picUrl: "https://images.pexels.com/photos/10010406/pexels-photo-10010406.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];


  return (
    <div >
 <div className='max-w-5xl mx-auto mb-5 '>

<div className="main shadow-2xl shadow-slate-300 lg:p-4 p-2 rounded-lg">
<div className="grid lg:grid-cols-3 grid-cols-1 gap-16">
  {
    experiences?.map(data=><>
   

      
<div className="max-w-[370px] h-[350px] bg-gradient-to-r from-sky-50 to-red-50 mx-auto overflow-hidden rounded-xl p-4 shadow-lg relative transform rotate-3 hover:scale-105 hover:rotate-0 transition-transform duration-300 cursor-pointer">

  <div>
    <img src={data.picUrl} alt="" className="h-20 w-20 rounded-md" />
    <div className="grid grid-cols-1 gap-2">
      <h1 className="text-xl font-semibold my-1">{data.title}</h1>
   <p className="font-light text-base">{data.description}</p></div>
  </div>
</div>
    </>)
  }
</div>
</div>

</div>

    </div>
  )
}

export default SecondSection