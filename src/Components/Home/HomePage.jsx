import Title from "../Title/Title"
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"


const HomePage = () => {
  return (
    <div className="my-10">
 <FirstSection></FirstSection>
 <Title title={"A Glimpse into My World"} side={"text-right"}></Title>
 <SecondSection></SecondSection>
    </div>
  )
}

export default HomePage