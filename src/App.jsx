import { useContext, useState } from 'react'

import logo from './assets/logo.svg'
import arrow from './assets/icon-arrow-down.svg'
import moon from './assets/icon-moon.svg'
import play from './assets/icon-play-hover.svg'
import search from './assets/icon-search.svg'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'


function App() {
  
 
  return (
    <>
    
    <div className='container'>
     <Header logo={logo} arrow={arrow} moon={moon} />
     <Main search={search} play={play}/>
     </div>
     
    
    </>
  )
}

export default App
