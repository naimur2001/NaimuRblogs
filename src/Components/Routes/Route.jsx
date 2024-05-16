import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Technology from "../Pages/GenreFolder/Technology";

const router=createBrowserRouter ([
{
  element: <Main></Main>,
  path: "/",
  children : [
    {
      path:"tech",
      element: <Technology></Technology>
    }
  ]
}

])

export default router ;