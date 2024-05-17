import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Technology from "../Pages/GenreFolder/Technology";
import HomePage from "../Home/HomePage";
import Travel from "../Pages/GenreFolder/Travel";

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
      element: <Technology></Technology>
    },
    {
      path:"travel",
      element:<Travel></Travel>
    }
  ]
}

])

export default router ;