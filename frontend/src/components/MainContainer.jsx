import React, { memo } from 'react'

function MainContainer({ children }) {
  return (
    <main className='w-full min-h-screen pb-3 pt-24 bg-gradient-to-tr from-[#07a] to-[#003] flex flex-col gap-5 text-white '>
        { children }
    </main>
  )
}

export default memo(MainContainer);

//NOTE: considering memoizing function