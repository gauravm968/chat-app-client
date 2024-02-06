import React from 'react'
import ReactEmoji from 'react-emoji';

export default function Message({ message: { user, text }, name }) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ?
            (<div className='flex justify-end py-0 px-[3%] mt-[3px] items-center'>
                <p className='flex items-center text-[#828282] tracking-[0.3px] text-sm pr-1'>{trimmedName}</p>
                <div className='rounded-[20px] text-white inline-block max-w-[80%] py-[5px] px-[20px] bg-[#2979FF]'>
                    <p className='w-full float-left text-md break-word text-white tracking-tight'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>) :
            (<div className='flex justify-start py-0 px-[3%] mt-[3px] items-center'>
                <div className='rounded-[20px] text-white inline-block max-w-[80%] py-[5px] px-[20px] bg-[#ecebeb]'>
                    <p className='w-full float-right text-md break-word text-[#353535] tracking-tight'>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='flex items-center text-[#828282] tracking-[0.3px] text-sm pl-1'>{user}</p>
            </div>)
    )
}
