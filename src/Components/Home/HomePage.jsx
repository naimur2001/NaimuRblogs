import Title from "../Title/Title"
import FirstSection from "./FirstSection"
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"


const HomePage = () => {
  return (
    <div className="my-10">
 <FirstSection></FirstSection>
 <Title title={"A Glimpse Into My World"} side={"text-right"}></Title>
 <SecondSection></SecondSection>
 <Title title={"Indeed, It Is Unmistakably Myself."} side={"text-left"}></Title>
 <ThirdSection></ThirdSection>
    </div>
  )
}

export default HomePage