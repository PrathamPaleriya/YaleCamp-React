import React from 'react'
import Searchbox from './Searchbox'
import HeroCampDisplay from './HeroCampDisplay'

function Campgrounds() {
  return (
    <div>
        <div className='bg-cream px-20 rounded-md py-3 mx-10 my-5'>
           <Searchbox placeholder="Search the Campgrounds"/> 
        </div>
        
        <div className='relative mx-auto my-5 w-[85%]'>
            <h1 className='text-center font-bold text-3xl mt-20'>All Campgrounds</h1>
            <HeroCampDisplay/>
        </div>
        
    </div>
  )
}

export default Campgrounds
