import React from 'react'
import SideBar from '../components/SideBar'
import AboutPage from '../components/AboutPage'
import AppBar from '../components/AppBar'

const About = () => {
  return (
    <>
    <AppBar/>
    <div className='grid grid-cols-6 mt-2'>
        <div className='hidden col-span-1 md:block'>
          <SideBar/>
        </div>
        <div className='col-span-4'>
          <AboutPage/>
        </div>
    </div>
    </>
  )
}

export default About