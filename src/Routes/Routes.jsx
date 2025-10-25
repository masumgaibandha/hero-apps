import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import { MainLayout } from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installetion";
import AppsDetails from "../Pages/AppsDetails";
import NotFound from "../Pages/NotFound";




const router = createBrowserRouter([
{
  path: '/',
  element: <MainLayout/>,
  
  hydrateFallbackElement: (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-error" />
      </div>
    ),

  children: [
    {
  index: true,
  element: <Home/>,
  
},

{
  path: '/apps',
  element: <Apps/>,
  
},
{
  path: '/installation',
  element: <Installation/>,
},
{
  path: '/app/:id',
  element: <AppsDetails/>

},
{ path: '404', element: <NotFound /> },
{ path: '*', element: <NotFound /> },
 
  ]
}




])

export default router;