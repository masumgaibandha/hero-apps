import React from 'react'
import { Link} from 'react-router'
import useApps from '../hook/useApps'
import AppsCard from '../Components/AppsCard'
import Banner from '../Components/Banner'

const Home = () => {
  // const apps = useLoaderData ()
  const {apps, loading, error} = useApps()
   
  const featuredApps = apps.slice(0, 8)
  return (
    <div>
      <section className='banner'>
      <Banner/>
      </section>


      <section className='bg-[#E9E9E9]'>
        <div className='py-10'>
          <h1 className='text-[48px] text-center font-bold text-[#001931]'>Trending Apps</h1>
        <p className='text-xl text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto'>
          
        {
        featuredApps.map(app=>(
          
          <AppsCard key={app.id} app={app}/>
        ))
      }
      </div>
      
      <div className='py-7 container mx-auto text-center'>
       <Link to='/apps'> <button className="btn text-white bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] font-semibold px-10 py-6">Show All</button></Link>
        
      </div>
      </section>
      </div>
  )
}

export default Home