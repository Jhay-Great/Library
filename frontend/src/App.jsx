import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Collections from './pages/Collections'
import Library from './pages/Library'
import Nav from './components/Nav'
import CollectionItem from './pages/CollectionItem'


function App() {
  return (
      <div className='w-full min-h-screen '>
        <BrowserRouter>
        <Nav />
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