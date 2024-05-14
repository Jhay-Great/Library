import React, { memo } from 'react'

function MainContainer({ children }) {
  return (
    <main className='w-full min-h-screen p-40 pb-1 pt-24 bg-gradient-to-tr from-[#07a] to-[#003] flex flex-col gap-5 text-white '>
        { children }
    </main>
  )
}

export default memo(MainContainer);

//NOTE: considering memoizing function