import React from 'react'

function MainContainer({ children }) {
  return (
    <main className='w-full min-h-screen p-4 bg-slate-800 flex flex-col gap-5 '>
        { children }
    </main>
  )
}

export default MainContainer