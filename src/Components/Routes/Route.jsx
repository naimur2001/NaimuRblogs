import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Technology from "../Pages/GenreFolder/Technology";
import HomePage from "../Home/HomePage";
import Travel from "../Pages/GenreFolder/Travel";
import About from "../Pages/About/About";
import Connect from "../Pages/Connect/Connect";
import TechDetails from "../Shared/TechDetails";
import TravelDetails from "../Shared/TravelDetails";

const router=createBrowserRouter ([
{
  element: <Main></Main>,
  path: "/",
  children : [
    {
      path:"/",
      element: <HomePage></HomePage>
    },
    {
      path:"tech",
      element: <Technology></Technology>,
      
    },
    {
      path:"travel",
      element:<Travel></Travel>
    },
    {
      path:"about",
      element: <About></About>
    },
    {
      path: "connect",
      element : <Connect></Connect>
    },
    {
      path:"tech/details/:id",
      element:<TechDetails></TechDetails>,

    },
    {
      path:"travel/details/:id",
      element: <TravelDetails></TravelDetails> ,

    }
  ]
}

])

export default router ;