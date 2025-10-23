import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div>
      
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}
