import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  return (

    <div className="joinOuterContainer flex justify-center items-center h-[100vh] bg-[#1A1A1D] font-thin text-center">
    <div className="joinInnerContainer w-[20%]">
      <h1 className="heading text-white text-[2.5em] pb-2   ">Join</h1>
      <div>
        <input placeholder="Name" className="joinInput outline-none rounded-md text-sm p-1 w-[100%] bg-blue-100" type="text" onChange={(event) => setName(event.target.value)} />
      </div>
      <div >
        <input placeholder="Room" className="joinInput mt-2 text-sm w-[100%] p-1 outline-none  rounded-md  bg-blue-100 " type="text" onChange={(event) => setRoom(event.target.value)} />
      </div>
      <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="text-white uppercase bg-blue-500 rounded-lg p-1 inline-block border-none mt-4 w-[30%]" type="submit">Sign In</button>
        </Link>
    </div>
  </div>
      

  )
}

export default Join
