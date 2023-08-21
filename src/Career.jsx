import React from 'react'
import Module from './Module'
import './Module.css'

function Career() {
  return (
    <>
    <div className='m1'>
      <Module
      img=".\images\UX-1536x804.webp"
      head="Top 12 Career Opportunities for UI/UX Design"
      />
      <Module
       img="./images\Game-Development-Career-101.jpg"
       head="Game Development Career 2023: The Ultimate Beginners Guide"
      />
    </div>
    <div className='m2'>
    <Module
     img=".\images\professional-programmer.jpg"
     head="5 Career Opportunities for Full Stack Development"
    />
      <Module
       img=".\images\24746653_7002417.jpg"
       head="The Future & Scope of Full Stack Developers in India"
      />
    </div>
    </>
  )
}

export default Career