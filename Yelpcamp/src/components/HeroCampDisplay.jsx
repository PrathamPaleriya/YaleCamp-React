import React, { useContext } from 'react'
import CampCard from './CampCard'
import { CampgroundContext } from '../contect/CampgroundContext'

function HeroCampDisplay() {

    // const {campground} = useContext(campgroundContext)
    const {campground} = useContext(CampgroundContext)
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 min-w-72'>
      {campground.map(item => (
        <CampCard key={item.key} id={item.key} title={item.title} description={item.description} coverImage={item.coverImage} />
      ))}
    </div>
  )
}

export default HeroCampDisplay
