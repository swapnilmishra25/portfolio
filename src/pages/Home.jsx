import React from 'react'
import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'
import ProjectScreen from '../components/ProjectScreen'

const Home = () => {
  return (
    <div className= 'flex flex-col'>
        <AppBar/>
      <div className="grid grid-cols-6 mt-2">
        <div className="col-span-1 hidden md:block">
          <SideBar/>
        </div>
        <div className="col-span-5">
          <ProjectScreen/>
        </div>
      </div>
    </div>
  )
}

export default Home