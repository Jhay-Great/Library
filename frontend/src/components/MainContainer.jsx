import React, { memo } from 'react'

function MainContainer({ children }) {
  console.log('main container also ran');
  return (
    <main className='w-full min-h-screen p-4 pt-24 bg-slate-800 flex flex-col gap-5 text-white '>
        { children }
    </main>
  )
}

export default memo(MainContainer);

//NOTE: considering memoizing function