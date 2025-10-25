import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Installation = () => {
const [installation, setInstallation] = useState([])
const [sortApps, setApps] = useState('none')
useEffect(() => {
  const saveList = JSON.parse(localStorage.getItem('installation'))
  if(saveList) setInstallation(saveList)
}, [])

const sortedItem = (
  () =>{
  if(sortApps === 'size-asc'){
    return [...installation].sort((a, b) => a.size - b.size)
  } else if(sortApps === 'size-desc'){
    return [...installation].sort((a, b) => b.size - a.size)
  } else{
    return installation
  }
})()

const handleRemove = (id, title) =>{
  toast.success(`${title} — Uninstalled Successfully`);
  const updatedList = installation.filter(a=>a.id !== id)
  
   setInstallation(updatedList)
  
    localStorage.setItem('installation', JSON.stringify(updatedList))
}


  return (
    <div className='bg-[#D2D2D2] h-screen'>
      <div className='text-center py-10 space-y-3'>
    <h1 className='font-bold text-5xl'>Your Installed Apps</h1>
    <p className='text-xl'>Explore All Trending Apps on the Market developed by us</p>
  </div>

<div className='container mx-auto flex justify-between items-center py-3 '>
  
    <h1 className='font-semibold text-2xl'>
      <span>
        ({sortedItem.length})
        Apps Found </span> </h1>
    
    <select className='select select-bordered rounded' value={sortApps} onChange={e => setApps(e.target.value)}>
      <option value='none'>Sort By Size</option>
      <option value='size-asc'>Low-&gt;High</option>
      <option value='size-desc'>High-&gt;Low</option>

    </select>
    </div>
    
      <div className='space-y-3'>
          {sortedItem.map(a=>(
            <div className='container mx-auto bg-base-100 shadow-sm p-2 rounded'>
      

    <div className="card card-side">
  <div className="flex w-full items-center justify-between p-4 container mx-auto ">
       <div className="flex items-center gap-4">
      <img
        src={a.image}
        alt="Forest app"
        className="w-[80px] rounded"
      />
      <div className="flex flex-col">
        <h2 className="card-title font-semibold text-xl">
          {a.title}
        </h2>
        <div className="mt-1 flex items-center gap-6 text-sm text-gray-600">
          <p className="flex items-center gap-1">
            <img src="https://i.ibb.co/SXxbYnLR/icon-downloads.png" alt="" className="w-[12px]" />
            <span>{a.downloads}</span>
          </p>
          <p className="flex items-center gap-1">
            <img src="https://i.ibb.co/V0swtjfP/icon-ratings.png" alt="" className="w-[12px]" />
            <span>{a.ratingAvg}</span>
          </p>
          <span>{a.size} MB</span>
        </div>
      </div>
    </div>

   
    <div className="shrink-0">
      <button onClick={() => handleRemove(a.id, a.title)} className="btn text-white bg-[#00D390]">
  Uninstall
</button>
    </div>
  </div>
</div>

    </div>

          ))}
      </div>


    <ToastContainer 
            position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"/>

   
    </div>
  )
}

export default Installation