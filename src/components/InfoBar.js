import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

export default function InfoBar({ room }) {

  return (
    <div className='flex justify-between items-center px-4 py-2.5 bg-[#2979ff]'>
      
        <div className='flex justify-center items-center'>
            <GoDotFill className='text-white animate-pulse text-[10px]'/>
            <h3 className='ml-2 text-white font-semibold text-sm'>{room}</h3>
        </div>
        <div className='r'>
            <a href="/"><IoCloseOutline className='text-[20px] text-white'/> </a>
        </div>
    </div>
  )
}
