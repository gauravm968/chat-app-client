import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
import { socket, ENDPOINT } from '../helper/socket';
import queryString from 'query-string';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import TextContainer from './TextContainer';
import { useLocation } from 'react-router-dom';

export default function Chat() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const location = useLocation();    //without also works

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);    //window.location.search

        // socket = io.connect(ENDPOINT, {
        //     cors: {
        //         origin: "http://localhost:3000",
        //         credentials: true
        //     }, transports: ['websocket']
        // });

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, (error) => {    //{name: name, room: room}
            if(error){   
                alert(error);
            }
        });     
 
        // return () => {
        //     socket.disconnect();
            
        //     socket.off();
        // }
    }, [ENDPOINT, location.search]);   

    useEffect(() => {    
        //listen to events from server
        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
        });
        
        // socket.on('roomData', ({ users }) =>{
        //     setUsers(users);
        // })
    }, [messages]);

    // function for sending messages 
    const sendMessage = (event) => {     //server -> 'sendMessage'
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className='flex justify-center items-center h-screen bg-[#1A1A1D]'>

            <div className='flex flex-col justify-between bg-[#ffffff] rounded-sm h-[60%] w-[35%] max-sm:w-full max-sm:h-full max-xl:w-[60%]'>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input name={name} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <TextContainer users={users} />

        </div>
    )
}
