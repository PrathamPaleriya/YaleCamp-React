import React from 'react'
import Searchbox from './Searchbox'
import { Link } from 'react-router-dom';

function SearchCard() {

    const handleSearch = (query) => {
        console.log('Search query:', query);
        // Add your search logic here
      };

  return (
    <div className='flex flex-col h-30 bg-cream py-10 px-10 lg:px-14  w-full min-w-72'>
        <div className='lg:w-[40%] w-full md:max-w-[60%]'>
            <h1 className='text-3xl font-bold my-1'>Welcome to YelpCamp!</h1>
            <p className='text-lg text-cream-dark my-2 leading-6'>View our hand-picked campgournds from all over the world, or add your own.</p>
            <div className='lg:w-[90%]'>
              <Searchbox placeholder="Search for camps" onSearch={handleSearch}/>
            </div>
            
            <Link to='/create-campground' className='text-cream-dark underline text-lg hover:text-rose-700'>Or add your own campgorund</Link>
        </div>
    </div>
  )
}

export default SearchCard
