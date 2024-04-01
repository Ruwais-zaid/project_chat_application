import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
const Messages = ({messages,name}) => {
    return(
  
   <ScrollToBottom className='message p-5 flex-auto overflow-auto'>
    {
        messages.map((messageCount,i)=>{
            return <div key={i}><Message message={messageCount.message} username={messageCount.username} name={name}/></div>
        })
    }
   </ScrollToBottom>
    )
}

export default Messages
