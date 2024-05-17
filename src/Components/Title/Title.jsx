
const Title = ({title,side}) => {
  return (
    <div className="my-10">
<h1 className={`lg:text-4xl text-2xl font-extrabold text-gray-400 ${side}`}>{title}</h1>
    </div>
  )
}

export default Title;