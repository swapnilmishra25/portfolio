import React from 'react'
import { Link } from 'react-router-dom'

const ContactLabel = ({image, label, href}) => {
  return (
        <a href={href}>
            <div onClick={()=>{
                window.location.href = {href}
            }} className='flex gap-2 p-2 bg-white hover:bg-gray-300 rounded-lg'>
                <img className = 'w-8 h-8 rounded-lg' src={image} alt="" />
                {label}
            </div>
        </a>
    
  )
}

export default ContactLabel