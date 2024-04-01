import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Infobar from './Infobar';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setName(name);
    setRoom(room);

    // Initialize socket connection when component mounts
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    // Join the room
    if (name && room) {
      newSocket.emit('join', room);
    }

    // Clean up socket connection when component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (!socket) return; // Ensure socket is initialized
    if (message.trim()) {
      const messageData = {
        room: room,
        username: name,
        message: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      };
      socket.emit('sendMessage', messageData);
      setMessageList(messageList => [...messageList, messageData]); 
    }
  };

  useEffect(() => {
    if (!socket) return; // Ensure socket is initialized
    socket.on('recievedMessage', (data) => {
      setMessageList(messageList => [...messageList, data]); 
    // Corrected variable name // Log messageList after updating
    });
  }, [socket]);

  return (
    <div className='outercontainer flex justify-center items-center h-screen bg-gray-900 '>
      <div className='container flex flex-col justify-between bg-white  h-[30em] w-[38em] '>
        <Infobar room={room} />
        <Messages messages={messageList} name={name} />
        <Input setCurrentMessage={setMessage} currentMessage={message} sendMessage={sendMessage} />

      </div>
    </div>
  );
};

export default Chat;
