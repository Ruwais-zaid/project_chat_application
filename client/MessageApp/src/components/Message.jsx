import React from 'react'
import ReactEmoji from 'react-emoji';
const Message = ({message,username,name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if(username === trimmedName) {
        isSentByCurrentUser = true;
      }
  return (
    isSentByCurrentUser ?(
        <div className='messagecontainer flex p-2 mt-3 justify-end'>
            <p className='sentext  flex items-center font-sans text-[#828282]  pr-10 '>{trimmedName}</p>
            <div className='messagebox rounded-b-md rounded-t-md p-2  text-white w-[23%] bg-blue-500'>
                <p className='messagetext w-[100%] font-sans float-left text-[1.1em] text-white'>{ReactEmoji.emojify(message)}</p>
            </div>
        </div>
    ):
    (
      <div className="messageContainer flex p-2 mt-3 justify-start">
          <div className="messageBox rounded-b-md rounded-t-md p-2 font-sans text-white w-[23%] bg-gray-400">
            <p className="messageText w-[100%]  text-[1.1em] text-black">{ReactEmoji.emojify(message)}</p>
          </div>
          <p className="sentText flex items-center font-sans text-[#828282]  pl-10 ">{username}</p>
        </div>
      )
  )
  
}

export default Message
