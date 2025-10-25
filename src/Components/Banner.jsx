import React from 'react'

const Banner = () => {
  return (
    <div>
      
      <div>
        <h1 className='font-bold text-[72px] text-center scroll-py-1.5'>We Build <br/>
          <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-bold'> Productive</span> Apps
        </h1>
        <p className='text-center pb-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

      <div className='flex justify-center py-5 gap-3'>
        <button className="btn text-xl font-semibold bg-[#FFFFFF] p-5"> 
          <img src="https://i.ibb.co/fVqJt7G2/gp.jpg" alt="Google Play" className="w-[27px] mix-blend-multiply dark:mix-blend-screen"/>
          <span><a href="https://play.google.com/store/games" target='_blank'>Google Play</a></span>
        </button>
        <button className="btn text-xl font-semibold bg-[#FFFFFF] p-5"> 
          <img src="https://i.ibb.co/KpzsH1kb/appstore.png" alt="Google Play" className="w-[27px] mix-blend-multiply dark:mix-blend-screen"/>
          <span><a href="https://www.apple.com/app-store/" target='_blank'>App Store</a></span>
        </button>
      </div>
      <div className='justify-center flex'>
        <img src="https://i.ibb.co/gMr9vxGh/hero.png" alt="" />
      </div>
      <div className='h-[370px] bg-gradient-to-tr from-[#632ee3] to-[#9f62f2]'>
        <h1 className='text-white text-[44px] text-center pt-7'>Trusted by Millions, Built for You</h1>
        
        <div className='flex container mx-auto justify-center gap-25'>
          <div className='pt-7 '>
          <p className='text-white text-center'>Total Downloads</p>
          <span className='font-extrabold text-[64px] text-white '>29.6M</span>
          <p className='text-white'>21% more than last month</p>
        </div>
        <div className='pt-7 '>
          <p className='text-white text-center'>Total Reviews</p>
          <span className='font-extrabold text-[64px] text-white'>906K</span>
          <p className='text-white'>46% more than last month</p>
        </div>
        <div className='pt-7'>
          <p className='text-white text-center'>Active Apps</p>
          <span className='font-extrabold text-[64px] text-white'>132+</span>
          <p className='text-white'>31 more will Launch</p>
        </div>
        </div>
      </div>

      </div>
      

    </div>
  )
}

export default Banner