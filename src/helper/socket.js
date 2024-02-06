import { io } from 'socket.io-client';

export const ENDPOINT = "http://localhost:5000/l";

export const socket = io(ENDPOINT, {transports: ['websocket']});
export let socketID = '';

socket.on('connect', () => {
    socketID = socket.id;
});