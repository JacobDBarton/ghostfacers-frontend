import React from 'react'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
        <h1>Why DO we need this? That is THE question!</h1>
        <Outlet/>
    </div>
  )
}

export default App