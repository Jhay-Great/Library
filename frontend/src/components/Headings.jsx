import React, { memo } from 'react'

function Headings({children, tag='h1', additionalStyles=''}) {
    if (tag === 'h1') return (
        <h1 className={` text-yellow-300 font-bold text-4xl sm:text-6xl px-5 sm:px-20 ${additionalStyles}`} >
            {children}
        </h1>
    );

    if (tag === 'h3') return (
        <h3 className={` text-white font-bold text-lg sm:text-xl ${additionalStyles}`} >
            {children}
        </h3>
    );

  return (
    <h2 className={`mb-5 px-5 sm:px-20 text-white font-semibold text-xl sm:text-2xl ${additionalStyles}`}>
        {children}
    </h2>
  )
}

export default memo(Headings)

//NOTE: looking at memoizing this function to prevent unnecessary rending