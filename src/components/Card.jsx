import React from 'react'
import {useNavigate} from 'react-router-dom';

const Card = ({image, title, thumbNail, date, author, onclick}) => {
    const navigate = useNavigate();
    return (
    <div onClick={()=>{
        navigate(onclick)
    }} className='flex flex-col shadow-lg p-1 m-2 cursor-pointer'>
        <div>
            <img className='rounded-md' src = {image}/>
        </div>
        <div>
            <div className='flex'>
                <img className='rounded-full  w-10 h-10  mt-4' src={thumbNail} alt="" />
                <div className='p-2'>
                    <div className='text-xl font-semibold'>
                        {title} 
                    </div>
                    <div className='text-xs text-gray-600'>
                        {author}<br/>
                        {date}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card;