import React from 'react';
import HeroImage from '../assets/HeroImage.jpg';
import logo from '../assets/Logo.svg';
import Checkpoint from '../assets/Checkmark.svg';
import { Link} from 'react-router-dom';



function Hero() {
  return (
    <div className='lg:grid lg:grid-cols-2 bg-cream lg:w-screen lg:h-screen font-poppins'>
        <div className='px-28 py-8'>
            <img src={logo} alt="logo" />
            <div className='my-28 hidden lg:block'>
                <h1 className='text-5xl font-bold'>Explore the best camps on Earth.</h1>
                <p className='text-xl text-cream-dark mt-5  '>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                <ul className='mt-5'>
                    <li className='flex gap-3 text-cream-dark text-lg my-2'> <img src={Checkpoint} alt="" />Add your own camp suggestions.</li>
                    <li className='flex gap-3 text-cream-dark text-lg my-2'> <img src={Checkpoint} alt="" />Leave reviews and experience.</li>
                    <li className='flex gap-3 text-cream-dark text-lg my-2'> <img src={Checkpoint} alt="" />See location for all camps.</li>
                </ul>
                <Link to="/home"><button className='bg-rose-500 font-semibold text-white px-7 py-4 rounded-md hover:bg-white hover:text-rose-500 hover:border-rose-500 hover:border-2 hover:shadow-md mt-5'>View Campgrounds</button></Link>
            </div>

            
        
        </div>
        <div>
            <img src={HeroImage} alt="Camp Imagae"  className='object-cover object-center-10 w-full h-full sm:max-w-full max-h-80 lg:max-w-full lg:max-h-screen'/>
        </div>

        <div className='lg:hidden p-10 block'>
        <h1 className='text-5xl font-bold'>Explore the best camps on Earth.</h1>
                <p className='text-xl text-cream-dark mt-5  '>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                <ul className='mt-5'>
                    <li className='flex gap-3 text-cream-dark text-lg my-2'> <img src={Checkpoint} alt="" />Add your own camp suggestions.</li>
                    <li className='flex gap-3 text-cream-dark text-lg my-2'> <img src={Checkpoint} alt="" />Leave reviews and experience.</li>
                    <li className='flex gap-3 text-cream-dark text-lg my-2'> <img src={Checkpoint} alt="" />See location for all camps.</li>
                </ul>
                <Link to="/home" className='bg-rose-500 font-semibold text-white px-7 py-4 rounded-md hover:bg-white hover:text-rose-500 hover:border-rose-500 hover:border-2 hover:shadow-md mt-5'>View Campgrounds</Link>
        </div>

    </div>
  )
}

export default Hero
