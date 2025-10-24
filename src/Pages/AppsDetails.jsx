import React, { useState } from 'react'
import { useParams } from 'react-router'
import useApps from '../hook/useApps'

const AppsDetails = () => {
  const {id} = useParams()
  const {apps, loading, error} = useApps()
  
  const app = apps.find(a => String(a.id) ===id)
  console.log(app)
  if(loading) return <p>Loading....</p>
  const {image, title, downloads, ratingAvg,reviews, size} = app
  return (
  
  <div>
      <section className='container mx-auto pt-10 pb-2 border-b border-gray-300'>
        <div className='flex gap-10'>
          <div className='overflow-hidden'>
          <img src={image} alt="" className='rounded-2xl w-[300px]' />
        </div>

        <div>
        <div className='flex-col pb-5'>
          <h1 className='font-bold text-[32px]'>{title}</h1>
          <p className='text-xl text-[#627382]'>Developed by <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold'>productive.io</span></p>
          
        </div>
          <div className='flex justify-between'>
            <nav className='flex-col space-y-2'>
            <img src="https://i.ibb.co/Y7h2nBBH/icon-downloads.png" alt="" className='w-[20px]'/>
            <p>Downloads</p>
            <span className='font-extrabold text-[40px]'>{downloads}</span>
          </nav>
            <nav className='flex-col space-y-2'>
            <img src="https://i.ibb.co/LDMPGfxx/icon-ratings.png" alt="" className='w-[20px]'/>
            <p>Average Ratings</p>
            <span className='font-extrabold text-[40px]'>{ratingAvg}</span>
          </nav>
            <nav className='flex-col space-y-2'>
            <img src="https://i.ibb.co/SDQ73fMx/icon-review.png" alt="" className='w-[20px]'/>
            <p>Total Reviews</p>
            <span className='font-extrabold text-[40px]'>{reviews}K</span>
          </nav>
          
          </div>
        <button className="btn bg-[#00D390] text-white text-xl">Install Now <span>({size} MB)</span></button>

        </div>
        
        
        </div>

         
      </section>
      
    </div>
  )
}

export default AppsDetails