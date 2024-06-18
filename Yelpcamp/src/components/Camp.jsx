import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { CampgroundContext } from '../contect/CampgroundContext';
import Map from './Map/Map';

function camp() {

  const { id } = useParams();
  const { campground } = useContext(CampgroundContext)
  const camp = campground.find((camp) => camp.key === id);
  const rate = `$${camp.rate}/night`

  return (
    <div className='grid grid-cols-3 px-8 lg:px-20 my-10 gap-10'>
      <div className='border-2 border-cream-outline rounded-md w-full p-10 max-h-[650px] hover:border-cream-dark hover:border-2'>
        <Map location={camp.location} id={camp.key} title={camp.title}/>

      </div>

      <div className='border-2 border-cream-outline rounded-md w-full p-10 col-span-2'>
        <div>
          <img src={camp.image} alt="" className='object-cover object-center w-full h-[550px]' />
          <div className='flex   justify-between items-center'>
            <h1 className='my-5 text-2xl font-bold'>{camp.title}</h1>
            <p className='text-xl'>{rate}</p>
          </div>
          <p className='text-xl text-cream-dark'>{camp.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default camp
