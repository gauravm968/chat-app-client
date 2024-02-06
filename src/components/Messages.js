import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom className='py-[5%] px-0 overflow-auto flex-auto'>
        { messages.map((message, ind) => <div key={ind}>
            <Message message={message} name={name} />
        </div>) }
    </ScrollToBottom>
  )
}
