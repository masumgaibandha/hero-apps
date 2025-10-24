import React from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
  <div className=' flex items-center container mx-auto'>
    <div className="navbar-start">

      

  <Link to='/' className="btn btn-ghost text-xl">
    <img src="https://i.ibb.co/Tqgz2vKX/logo.png" alt="" className='w-[40px]' />
    <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-bold'>HERO.IO</span></Link>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li>
        <NavLink className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent" to='/'>Home</NavLink>
       </li>
      <li>
        <NavLink to='/apps'>Apps</NavLink>
       </li>
      <li>
        <NavLink to='/installation'>Installation</NavLink>
       </li>
      
    </ul>
  </div>

  <div className="navbar-end">
  <Link to="/" className="btn rounded-[4px] border-0 text-white gap-2 bg-gradient-to-tr from-[#632ee3] to-[#9f62f2] hover:opacity-90">
    <img src="https://i.ibb.co/dwS1fJBW/fi-2111432.png" alt="Git" className="w-5" />
    <span>Contribute</span>
  </Link>
</div>

  </div>
  
</nav>






  )
}

export default Navbar