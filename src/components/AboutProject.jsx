import React from 'react'
import Card from './card'

const AboutProject = () => {
  return (
    <div className='ml-20 mt-5'>
        <div className='grid md:grid-cols-3'>
        <Card title = "Payment App" image = "./paytm.png" thumbNail= "./author.png"  date = "December 2023" author= "Swapnil Mishra" />
        <Card title = "Codepen Clone" image = "./codepen.jpg" thumbNail= "./author.png"  date = "November 2023" author= "Swapnil Mishra" />
        <Card title = "Backroads Landing Page" image = "./backroads.png" thumbNail= "./author.png"  date = "July 2023" author= "Swapnil Mishra" />
        <Card title = "Portfolio" image = "./portfolio.png" thumbNail= "./author.png"  date = "December 2023" author= "Swapnil Mishra" />
    </div>
    </div>
  )
}

export default AboutProject