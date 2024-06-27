import React from 'react'
import Chatbubble from '../assets/ChatBubble.svg'
import { Link } from 'react-router-dom';

function ReviewCard({campID, reviews}) {

    

  return (
    <>
        {reviews.map((item) => (
            <div key={item.$id} className='border-b-2 border-cream-outline p-4 w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-lg md:text-xl'>{item.author}</h1>
                    <p className='font-semibold text-sm md:text-lg text-cream-dark'>{new Date(item.$createdAt).toLocaleDateString()}</p>
                </div>
                <p className='text-lg md:text-xl text-cream-dark my-2'>{item.review}</p>
            </div>
        ))}
        <Link to={`/add-review/${campID}`} >
            <button className='mt-5 md:py-4 py-3  px-4 md:px-5 rounded-md font-semibold bg-slate-950 text-white hover:bg-slate-800 hover:shadow-md'><div className='flex justify-end items-center gap-2'><img src={Chatbubble} alt="" />Leave a Review</div></button>
        </Link>
    </>
  )
}

export default ReviewCard;
