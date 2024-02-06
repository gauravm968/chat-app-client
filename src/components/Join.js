import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

  return (
    <div className='flex justify-center items-center h-screen text-center bg-[#1A1A1D]'>
      
      {/* max-sm: (max-width: 640px) | sm: (min-width: 640px)*/}
        <div className='w-[20%] max-sm:w-[90%]'>
            {/* if bottom border acc text width use-> inline-block */}
            <h1 className='text-white text-[2.5em] border-b-[2px]'>Join</h1>
            <div><input placeholder='Name' className='border rounded-[2px] px-[15px] py-[10px] w-full mt-10 outline-none' type='text' onChange={(event) => setName(event.target.value)} /></div>
            <div><input placeholder='Room' className='border rounded-[2px] px-[15px] py-[10px] w-full mt-10 outline-none' type='text' onChange={(event) => setRoom(event.target.value)} /></div>
            <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className='text-[#fff] uppercase bg-[#2979FF] p-[15px] rounded-[10px] border-none w-full inline-block hover:text-[#2979FF] hover:bg-[#fff] mt-10 focus:ouline-none' type='submit'>Sign In</button>
            </Link>
        </div>

    </div>
  )
}
