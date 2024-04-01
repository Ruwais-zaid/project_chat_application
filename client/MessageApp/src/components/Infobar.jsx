import React from 'react'

const Infobar = ({room}) => {
  return (
    <div className="flex items-center justify-between bg-blue-500  h-12 w-full  ">
    <div className="flex items-center flex-1   p-5 text-white">
      <img className="onlineIcon mr-5 w-2 h-2 rounded-full"  src='https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg' alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className=" flex items-center flex-1 justify-end mr-5">
      <a href="/"><img className="w-2 h-2" src="https://static-00.iconduck.com/assets.00/offline-icon-512x512-ly69ez5k.png" alt="close icon" /></a>
    </div>
  </div>
  )
}

export default Infobar
