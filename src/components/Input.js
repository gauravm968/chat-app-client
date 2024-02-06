import React from 'react'

export default function Input({ message, setMessage, sendMessage }) {

  return (
    <form className='flex border-t-2 border-[#D3D3D3] '>
        <input 
        className='border-none p-[4%] w-[80%] text-sm focus:outline-none'
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className='bg-[#2979ff] text-[#fff] uppercase p-[1px] inline-block border-none w-[20%] cursor-pointer text-sm' onClick={(event) => sendMessage(event)}>Send</button>
    </form>
  )
}
