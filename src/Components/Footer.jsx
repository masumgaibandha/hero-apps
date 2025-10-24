import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
   <footer className=" bg-[#000000] text-white pt-10 ">
         
  <div className='flex justify-between shadow-[inset_0_-1px_0_rgba(255,255,255,0.35)] pb-5 container mx-auto'>
    
    <nav className='max-w-[350px]'>  
  <Link to='/' className="btn btn-ghost text-xl">
    <img src="https://i.ibb.co/Tqgz2vKX/logo.png" alt="" className='w-[40px]' />
    <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-bold'>HERO.IO</span></Link>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </nav>
  
  <nav className='space-y-3'>
    <h6 className="font-medium text-xl">Services</h6>
    <div className='flex flex-col space-y-2'>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/apps' className="link link-hover">Apps</Link>
    <Link to='./installation' className="link link-hover">Installetion</Link>
    </div>
    
  </nav>
  <nav className='space-y-3'>
    <h6 className="font-medium text-xl">Information</h6>
    <div className='flex flex-col space-y-2'>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
    </div>
  </nav>
  <nav className='space-y-3'>
    <h6 className="font-medium text-xl">Social Links</h6>
    <div className='flex gap-2 items-center'>
      <img src="https://i.ibb.co/fVrMrGxZ/twitter.png" alt="" />
      <a className="link link-hover">@HERO.IO</a>
    </div>
    <div className='flex gap-2 items-center'>
      <img src="https://i.ibb.co/7N0ZcB5D/li.png" alt="" />
      <a className="link link-hover">@HERO.IO</a>
    </div>
    <div className='flex gap-2 items-center'>
      <img src="https://i.ibb.co/Dfwkkk50/fb.png" alt="" />
      <Link to='/' className="link link-hover">@HERO.IO</Link>
    </div> 
  </nav>
  </div>
    
    </footer>

  )
}

export default Footer