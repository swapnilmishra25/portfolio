import React from 'react'
import AppBar from './AppBar'
import ProjectTile from './ProjectTile'
import Playlist from './Playlist'
import { ProjectsList } from '../assets/projectslist'

const Projects = ({projectNumber}) => {
  return (
    <div>
        <AppBar/>
        <div className='grid grid-cols-10'>
            <div className='col-span-8 m-6'>
                <ProjectTile 
                image = {ProjectsList[projectNumber].image}
                title = {ProjectsList[projectNumber].title}
                description = {ProjectsList[projectNumber].description}
                skills = {ProjectsList[projectNumber].skills}
                date = {ProjectsList[projectNumber].date}
                thumbnail = {ProjectsList[projectNumber].thumbnail}
                github={ProjectsList[projectNumber].github}
                />
            </div>
            <div className='col-span-2'>
              <Playlist/>
            </div>
        </div>
    </div>
  )
}

export default Projects