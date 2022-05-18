import React from 'react'
import { Outlet } from 'react-router-dom';
import LandingPage from '../LandingPage';

function App() {
  return (
    <div>
        <div> 
            <Outlet/>
        </div>
        <div>
            <LandingPage/>
        </div>
    </div>
  )
}

export default App