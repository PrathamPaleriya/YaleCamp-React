import React from 'react'
import { useState } from 'react';
import searchIcon from '../assets/SearchIcon.svg'

const Searchbox = ({ placeholder, onSearch }) => {

    const search = `<img src={SearchIcon} alt="" />`

    const [query, setQuery] = useState('');
  
    const handleInputChange = (e) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = () => {
      if (onSearch) {
        onSearch(query);
      }
    };
  
    return (
      <div className="md:flex gap-4 my-3">
        <input 
            type="text" 
            value={query} 
            onChange={handleInputChange} 
            placeholder={placeholder}
            className="px-5 py-3  border-gray-300 placeholder:text-cream-dark border-2 w-full my-2 md:my-0" 
        />

        <button type='submit' onClick={handleSearch} className=" flex items-center justify-center text-white px-8 py-3 w-full min-w-20 md:max-w-20 gap-2 bg-black mb-4 md:mb-0">
          <img src={searchIcon} alt="" className=''/> <span className='md:hidden'>Search</span>
        </button>
      </div>
    );
  };


export default Searchbox
