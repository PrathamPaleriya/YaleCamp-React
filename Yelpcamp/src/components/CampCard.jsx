import React, { useEffect, useState } from 'react'
import { MountUlapSM } from '../Data/Images'
import { Link } from 'react-router-dom'
import { storage } from '../appwrite/config'
import { ImageFormat, ImageGravity } from 'appwrite'

function CampCard({id, title, caption, imageID}) {

  const fileId = imageID
  const [imageURL , setImageURL] = useState()

  useEffect(() => {
    fetchImage();
  }, [])

  const fetchImage = async () => {
    const respone = await storage.getFilePreview(
      import.meta.env.VITE_BUCKET_CAMPIMAGE_ID,
      fileId
    )

    setImageURL(respone.href)
  }
  



  return (
    <div className='border-2 border-cream-outline m-5 p-4 rounded-md'>
      <img src={imageURL} alt={`${title} thumbnail`} className='object-cover w-full h-52 object-center'/>
      <h1 className='font-bold my-2 text-xl'>{title}</h1>
      <p className='text-cream-dark my-2 text-lg h-20'>{caption}</p>
      <Link to={`/home/camp/${id}`} className='border-2 border-cream-outline  px-9 py-2 w-full block text-center mt-2 rounded-lg font-semibold hover:border-cream-dark '><button>View Campground</button></Link>
      
    </div>
  )
}

export default CampCard
