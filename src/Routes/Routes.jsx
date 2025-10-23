import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import { MainLayout } from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";




const router = createBrowserRouter([
{
  path: '/',
  element: <MainLayout/>,
  errorElement: <ErrorPage/>,
  children: [
    {
  index: true,
  element: <Home/>
},

{
  path: '/apps',
  element: <Apps/>,
}
  ]
}




])

export default router;