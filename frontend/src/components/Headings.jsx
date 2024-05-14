import React, { memo } from 'react'

function Headings({children, tag='h1', additionalStyles=''}) {
    if (tag === 'h1') return (
        <h1 className={` text-yellow-300 font-bold text-6xl ${additionalStyles}`} >
            {children}
        </h1>
    );

  return (
    <h2 className={`mb-5 text-white font-semibold text-2xl ${additionalStyles}`}>
        {children}
    </h2>
  )
}

export default memo(Headings)

//NOTE: looking at memoizing this function to prevent unnecessary rending