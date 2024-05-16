
const Title = ({title,side}) => {
  return (
    <div className="my-10">
<h1 className={`text-4xl font-extrabold text-gray-400 ${side}`}>{title}</h1>
    </div>
  )
}

export default Title