import React from 'react'
import Searchbox from './Searchbox'
import HeroCampDisplay from './HeroCampDisplay'
import { Helmet } from 'react-helmet'

function Campgrounds() {
  return (
    <div>

        <Helmet>
          <title>Campgrounds - Yelpcamp</title>
        </Helmet>

        <div className='bg-cream px-5 md:px-10 lg:px-20 rounded-md py-3 lg:mx-10 my-5'>
           <Searchbox placeholder="Search the Campgrounds"/> 
        </div>
        
        <div className='relative mx-auto my-5 full lg:w-[85%]'>
            <h1 className='text-center font-bold text-3xl mt-20'>All Campgrounds</h1>
            <HeroCampDisplay/>
        </div>
        
    </div>
  )
}

export default Campgrounds
