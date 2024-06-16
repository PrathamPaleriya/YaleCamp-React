import React from 'react'
import SearchCard from './SearchCard'
import HeroCampDisplay from './HeroCampDisplay'

function Home() {
  return (
    <div className='px-8 lg:px-20 m-auto space'>
        <SearchCard/>
        <HeroCampDisplay/>
    </div>
  )
}

export default Home
