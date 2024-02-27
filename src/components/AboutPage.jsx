import React from 'react'
import { useState } from 'react';
import AboutProject from './AboutProject';
import Contact from '../pages/Contact';

const AboutPage = () => {
  const [projectVisible, setProjectVisible] = useState(false);
  return (
    <div>
      <div className='flex ml-20 mt-5'>
          <img className='rounded-full w-1/6 h-1/5' src="author.png" alt="" />
          <div className=' pl-4'>
            <h1 className='text-3xl font-bold'>Swapnil Mishra</h1>
            <p className='pt-2'>
              Welcome to my web developer portfolio! I'm Swapnil, a skilled developer with a knack for creating visually stunning and functionally seamless websites. Dive into my projects to explore responsive designs and intuitive interfaces that showcase my commitment to innovation and user-centric development. Let's turn ideas into digital realities!
            </p>
          </div>
      </div>

      <div className='flex gap-4 ml-20 mt-10 pb-2 border-b-2 border-gray-300'>
        <button onClick={()=>{
          setProjectVisible(false);
          
        }}
         className='hover:bg-gray-300 rounded-lg p-2'>Contact</button>
        <button onClick={()=> {
          setProjectVisible(true)
        }} className='hover:bg-gray-300 rounded-lg p-2'>Projects</button>
      </div>
      
        <div>
          {projectVisible?<AboutProject/>:<Contact/>}
        </div>

    </div>
  )
}

export default AboutPage