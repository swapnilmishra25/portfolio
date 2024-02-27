import React from 'react'
import {useNavigate} from 'react-router-dom'

const PlaylistTile = ({title, image, author, navigateLink}) => {
    const navigate = useNavigate()
    return (
    <div onClick={()=>{navigate(navigateLink)}} className='m-2 mb-10 flex flex-row'>
            <img className='rounded-lg w-40 mr-4' src={image} alt="" />
        <div>
            <h2 className='font-bold'>{title}</h2>
            <h3 className='text-gray-700 text-xs'>{author}</h3>
        </div>
    </div>
  )
}

export default PlaylistTile