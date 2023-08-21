import React from 'react'
import Module from './Module'
import './Module.css'

function FullstackDeveloper() {
  return (
   <>
   <div className='m1'>
    <Module
    img=".\images\Full-Stack-Developer.webp"
    head="The Top 10 Tools Every Full Stack Developer Should Master in 2023"
    />
    <Module
    img=".\images\Real-World-Full-Stack.webp"
    head="The Ultimate Guide to Real-World Full Stack Development Applications"
    />
   </div>
   <div className='m2'>
    <Module
    img=".\images\best-way.webp"
    head="Best Ways to Learn Full Stack Development in 2023"
    />
    <Module
    img=".\images\how-long-it-would-it-take.webp"
    head="How Long Would It Take to Be a Full Stack Developer?"
    />
   </div>
   </>
  )
}

export default FullstackDeveloper