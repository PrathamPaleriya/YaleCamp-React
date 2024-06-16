import React from 'react'
import { MountUlapSM } from '../Data/Images'
import { Link } from 'react-router-dom'

function CampCard({title, description, coverImage}) {
  return (
    <div className='border-2 border-cream m-5 p-4 rounded-md'>
      <img src={coverImage} alt="" className='object-cover w-full object-center'/>
      <h1 className='font-bold my-2 text-xl'>{title}</h1>
      <p className='text-cream-dark my-2 text-lg'>{description}</p>
      <Link className='border-2 border-cream px-9 py-2 w-full block text-center mt-2 rounded-lg font-semibold hover:border-cream-dark '><button>View Campground</button></Link>
      
    </div>
  )
}

export default CampCard
