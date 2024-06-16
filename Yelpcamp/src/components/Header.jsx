import { useState } from 'react'
import React from 'react'
import Logo from '../assets/Logo.svg'
import {Link, NavLink} from 'react-router-dom'
import close from '../assets/Close.svg'
import Hamburger from '../assets/Hamburger.svg'



function Header() {

  const [icon, setIcon] = useState([Hamburger])
  const navLinks = document.querySelector('#navBar')
  const showNavigation = () =>{
    console.log("Shownavigation")
    if(icon === Hamburger){
      setIcon(close)
      
    }
    else{
      setIcon(Hamburger)
    }

    navLinks.classList.toggle('top-[-15%]')

  }

  return (
    <>
    <div className='flex px-8 py-6 lg:px-28 items-center justify-between w-full md:mb-3'>
      <Link to={"/home"}><img src={Logo} alt="Logo" /></Link>

      <div className='order-2 flex items-center'>
        <Link rel="Login" to="/login" className='text-cream-dark font-semibold lg:mx-2 mx-4  hover:text-rose-600 hover:shadow-sm '>Login</Link>
        <Link rel='Singin' to="/signin" className='hidden lg:inline-flex bg-black font-semibold text-white px-5 py-2  rounded-md hover:bg-white hover:text-cream-dark border-black border-2 hover:border-cream-dark hover:border-2 mx-2'>Create an account</Link>
        <button className='cursor-pointer  flex justify-center min-w-6 lg:hidden z-10 lg:z-0' onClick={showNavigation}><img src={icon} alt="hamburger icon" /></button>
      </div>

      <div id='navBar' className='flex absolute lg:static bg-white lg:bg-inherit justify-center items-center  m-auto font-semibold  lg:min-h-fit min-h-[55vh] left-0 top-[-100%] w-full lg:w-[50%] '>
        <ul className='flex lg:flex-row flex-col items-end lg:justify-center w-full mx-14 gap-5 me-11 h-10'>
          <li>
            <NavLink to="" className={({isActive}) => ` underline-offset-4 decoration-rose-600 hover:underline `}>Home</NavLink>
          </li>
          <li>
            <NavLink to="campgrounds" className={({isActive}) => ` underline-offset-4 decoration-rose-600 ${isActive ? "text-rose-600" : "text-cream-dark hover:underline"}`}>Campgrounds</NavLink>
          </li>
          <li>
            <NavLink to="about" className={({isActive}) => `underline-offset-4 decoration-rose-600 ${isActive ? "text-rose-500" : "text-cream-dark hover:underline"}`}>About</NavLink>
          </li>
        </ul>
      </div>


    </div>
    </>
  )
}

export default Header
