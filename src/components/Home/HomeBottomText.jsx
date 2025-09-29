import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center  gap-5 items-center font-[font2] w-full '>
        <Link to="/agence" className='text-[6.5vw] uppercase border-4 border-white px-10 rounded-full hover:border-[#d3fd50] hover:text-[#d3fd50] '>Agence</Link>
        <Link to="/projects" className='text-[6.5vw] uppercase border-4 border-white px-10 rounded-full hover:border-[#d3fd50] hover:text-[#d3fd50] '>Projects</Link>
    </div>
  )
}

export default HomeBottomText