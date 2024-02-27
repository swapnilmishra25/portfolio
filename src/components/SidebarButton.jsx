import React from 'react'

const SidebarButton = ({svg, label, onClick}) => {
  return (
    <div><button onClick = {onClick} className='flex p-2 gap-1 ml-2 rounded-xl hover:bg-gray-200'>
                <div>
                {svg}
                </div>
                {label}
            </button></div>
  )
}

export default SidebarButton