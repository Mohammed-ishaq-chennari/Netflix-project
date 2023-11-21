import React from 'react'
import Navbar from './component/NavBar/Navbar'
import './App.css'
import Banner from './component/Banner/Banner'
import Rowpost from './component/Rowpost/Rowpost'
import {action,originals} from './Urls'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />

      
    </div>
  )
}

export default App
