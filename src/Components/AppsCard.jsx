import React from 'react'
import { Link } from 'react-router';

const AppsCard = ({app}) => {
  const {image, title, downloads, ratingAvg, id} = app;
  return (
    <div>
      <Link to={`/app/${id}`} className='block bg-base-100 rounded-2xl space-y-3 p-4 cursor-pointer transition-shadow'>
            <div className='flex justify-center flex-col overflow-hidden'>
            <img src={app.image} alt="" className='rounded-2xl w-full object-cover'/>
            <h1 className='pt-3 text-center'>{app.title}</h1>

          </div>
          <div className='flex justify-between'>
           <button className="btn bg-[#F1F5E8] text-[#00D390] font-medium"> <img src="https://i.ibb.co/Y7h2nBBH/icon-downloads.png" alt="" className='h-[13px]'/><span>{app.downloads}</span></button>
           <button className="btn bg-[#FFF0E1] text-[#FF8811] font-medium"> <img src="https://i.ibb.co/LDMPGfxx/icon-ratings.png" alt="" className='h-[13px]'/><span>{app.ratingAvg}</span></button>
          </div>
          </Link>
    </div>
  )
}

export default AppsCard