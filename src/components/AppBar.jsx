import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';

const AppBar = () => {
    const navigate = useNavigate();
    const [side, setSide] = useState(false);
  return (
      <div className='sticky top-0 bg-white'>
        <div className='flex justify-between'>
            <button onClick={()=> setSide(true)} className='md:hidden ml-2 mt-3 p-4 rounded-full hover:bg-slate-300'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>
            <div onClick={() =>navigate("/")} className= "mt-4 ml-4 flex hover:cursor-pointer">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-7 rounded-lg text-white m-2 bg-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <div className='mt-2 font-bold'>
                    Swapnil
                </div>

            </div>
            {/*Search Bar*/}
            <div className='flex flex-row w-full justify-center m-2'>
                <input className='border-solid border w-1/2 border-gray-300 mt-1 p-2 h-10 rounded-l-3xl' type="text" placeholder='Search...'/>
                
                
                <button className='p-2 mt-1 w-10 h-10 bg-gray-200 rounded-r-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
            </div>
            <button className='cursor-pointer' onClick={() =>navigate("/about")} >
                <img className='rounded-full w-10 mt-2 mr-6' src="./author.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default AppBar