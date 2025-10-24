import React, { useState } from 'react'
import useApps from '../hook/useApps'
import Banner from '../Components/Banner'
import AppsCard from '../Components/AppsCard'

export const Apps = () => {
  const {apps} = useApps()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()

  const searchedApps = term? apps.filter(app =>app.title.toLocaleLowerCase().includes(term)) : apps
  
  return (
    <div>
      <section className='bg-[#E9E9E9] pb-10'>
        <div className='py-10'>
          <h1 className='text-[48px] text-center font-bold text-[#001931]'>Our All Applications</h1>
        <p className='text-xl text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className='container mx-auto flex justify-between items-center pb-5'>
        <h1 className='font-semibold text-2xl'><span>({searchedApps.length})</span> Apps Found</h1>
        
            <label className="input bg-[#f3f1f1] mr-7">
              <img src="https://i.ibb.co/Xk50mNhq/fi-54481.png" alt="" />
            <input 
            value={search}
            onChange={e=>setSearch (e.target.value)}
            type="search" placeholder="search Apps" />
            </label>
          </div>

      
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto'>
          
        {
        searchedApps.map(app=>(
          
          <AppsCard key={app.id} app={app}/>
        ))
      }
      </div>
      
     
      </section>
      </div>
  )
}
export default Apps