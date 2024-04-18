import React, { memo } from 'react'

function Headings({children, tag='h1', additionalStyles=''}) {
  console.log('Headings also ran')
    if (tag === 'h1') return (
        <h1 className={`text-white font-bold text-3xl ${additionalStyles}`} >
            {children}
        </h1>
    )
  return (
    <h2 className={`mb-5 text-altColor font-semibold text-xl ${additionalStyles}`}>
        {children}
    </h2>
  )
}

export default memo(Headings)

//NOTE: looking at memoizing this function to prevent unnecessary rending