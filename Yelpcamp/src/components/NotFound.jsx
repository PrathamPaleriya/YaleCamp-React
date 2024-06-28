import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

function NotFound() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div>
        <img src={Logo} alt="" />
        <p className='text-5xl font-bold my-8 '>404: Page Not Found</p>
        <Link to='/home' className='py-3 px-4 text-white bg-slate-950 hover:bg-slate-800 rounded-sm'><button className='my-7 w-[94%]'>Back to Home</button></Link>
      </div>
    </div>
  )
}

export default NotFound
