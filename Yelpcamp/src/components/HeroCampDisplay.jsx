import React from 'react'
import data from '../Data/Data'
import CampCard from './CampCard'

function HeroCampDisplay() {

    

  return (
    <div className='grid grid-cols-3'>
      {data.map(item => (
        <CampCard key={item.id} title={item.title} description={item.description} coverImage={item.coverImage} />
      ))}
    </div>
  )
}

export default HeroCampDisplay
