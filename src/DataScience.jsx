import React from 'react'
import Module from './Module'
import './Module.css'
function DataScience() {
  return (
    <>
    <div className='m1'>
      <Module
      img=".\images\Data-Science-Online-Courses.webp"
      head="10 Best Data Science Online Courses for Beginners | 2023"
      />
      <Module
      img=".\images\data-science-webinars-and-workshops.webp"
      head="Data Science Webinars and Workshops"
      />
    </div>
    <div className='m2'>
    <Module
     img=".\images\best-data-science-frameworks.webp"
     head="10 Best Data Science Frameworks in 2023 "
    />
    <Module
     img=".\images\Salary-in-India.png"
     head="Everything about Data Scientist Salary in India | 2023"
    />
    </div>
    </>
  )
}

export default DataScience