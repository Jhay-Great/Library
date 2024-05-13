import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Collections from './pages/Collections'
import Library from './pages/Library'
import Nav from './components/Nav'
import CollectionItem from './pages/CollectionItem'
import VerticalNavBar from './components/VeriticalNavBar'


function App() {
  const [ displayNavBar, setDisplayNavBar ] = useState('hidden');

  const handleNavBar = function() {
    setDisplayNavBar(displayNavBar === 'hidden' ? 'flex' : 'hidden');
  }

  return (
      <div className='w-full min-h-screen '>
        <BrowserRouter>
        <Nav handleClick={handleNavBar} />
        <VerticalNavBar toggle={displayNavBar} handleClick={handleNavBar} />
          <Routes>
            <Route path='/' element={ <Homepage /> } />
            <Route path='/collections' element={ <Collections /> } />
            <Route path='/library/:libraryId' element={ <CollectionItem /> } />
            <Route path='/library' element={ <Library /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </BrowserRouter>
        
        
      </div>
      
  )
}

export default App

// https://coolors.co/palette/110f24-141633-1e1a33-9a5751-1d2044-feac8e
/**
 * alt-2
 * https://coolors.co/palette/46bbbb-004b82-1c6185-2f7394-003563-f14b7e
 */
