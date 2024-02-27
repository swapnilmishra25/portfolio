import React from 'react'

const SkillsButton = ({image, label}) => {
  return (
    <button className='flex p-2 m-2 gap-2 rounded-lg hover:bg-gray-300'>
        <img className='rounded-full w-7 h-7' src={image} alt="" />
        <div className='mt-1'>
        {label}
        </div>
    </button>
  )
}

export default SkillsButton