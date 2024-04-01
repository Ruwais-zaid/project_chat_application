import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import Join from './components/Join'
import Chat from './components/Chat'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Join/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
 
  )
}

export default App
