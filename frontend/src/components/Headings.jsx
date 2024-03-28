import React from 'react'

function Headings({children, tag='h1', additionalStyles=''}) {
  console.log('Headings also ran')
    if (tag === 'h1') return (
        <h1 className={`text-white font-bold text-3xl ${additionalStyles}`} >
            {children}
        </h1>
    )
  return (
    <h2 className={`text-white font-semibold text-xl ${additionalStyles}`}>
        {children}
    </h2>
  )
}

export default Headings

// import filter from '../helpers/filter'
// const arr = ['c', 'd', 'a', 'c'];
// console.log(filter(arr));



// console.log(arr.indexOf(1))
// console.log(arr.filter((ar, i) => arr.indexOf(ar) === i))

// // const set = new Set(arr)
// // console.log(set)
// // const ar = [...set];
// // console.log(ar)