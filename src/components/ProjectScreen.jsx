import React from 'react'
import Card from './card'
import {useNavigate} from 'react-router-dom';

const ProjectScreen = () => {
  const navigate = useNavigate();
  return (
    <div className='grid-cols-1 grid md:grid-cols-3'>
        <Card onclick = "/projects" title = "Payment App" image = "./paytm.png" thumbNail= "./author.png"  date = "December 2023" author= "Swapnil Mishra" />
        <Card onclick = "/codepen" title = "Codepen Clone" image = "./codepen.jpg" thumbNail= "./author.png"  date = "November 2023" author= "Swapnil Mishra" />
        <Card onclick = "/backroads" title = "Backroads Landing Page" image = "./backroads.png" thumbNail= "./author.png"  date = "July 2023" author= "Swapnil Mishra" />
        <Card onclick = "/" title = "Portfolio" image = "./portfolio.png" thumbNail= "./author.png"  date = "December 2023" author= "Swapnil Mishra" />
    </div>
  )
}

export default ProjectScreen