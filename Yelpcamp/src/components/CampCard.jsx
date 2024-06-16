import React from 'react'

function CampCard({title, description, coverImage}) {
  return (
    <div>
      <img src={coverImage} alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default CampCard
