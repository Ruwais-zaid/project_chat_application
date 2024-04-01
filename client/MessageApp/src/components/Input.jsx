import React from 'react';

const Input = ({ setCurrentMessage, sendMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    sendMessage(); // Call sendMessage function
  };

  return (
    <form className='form flex justify-between border-t-2 h-[14%]  ' onSubmit={handleSubmit}>
      <input
        className='input border-none p-5 w-[80%] text-[1.2em] outline-none '
        type='text'
        placeholder='Type a message..'
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button type="button" className="sendButton text-white uppercase bg-[#2979FF] p-2 border-none w-[20%]" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default Input;