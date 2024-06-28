import React from 'react'
import SearchCard from './SearchCard'
import HeroCampDisplay from './HeroCampDisplay'
import { Helmet } from 'react-helmet'


function Home() {
  return (
    <div className='px-8 lg:px-20 m-auto space'>
        <Helmet>
            <title>Home - Yelpcamp</title>
        </Helmet>
        <SearchCard/>
        <HeroCampDisplay/>
    </div>
  )
}

export default Home
