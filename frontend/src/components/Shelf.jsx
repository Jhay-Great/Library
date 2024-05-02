import React, { useState } from 'react'

import { getSpecificCollections } from '../helpers/filter'

function Shelf({dataCollection, query}) {

    const openFile = function(pdf) {
      console.log(pdf)
        window.open(`http://localhost:8009/file/${pdf}`, '_blank', 'noreferrer');
    }

  return (
    <div className="hide-scrollbar w-full flex gap-10 overflow-x-scroll px-4 scrollbar-width-[scrollbar-width] ">
    {getSpecificCollections(dataCollection, query)?.map((item) =>
      item.name ? (
        <section key={item.id} className="flex-unique w-52 h-40 border rounded flex flex-col justify-center items-center gap-4 bg-gradient-to-bl from-[#003a] from-7% basis-auto ">
          <p className="text-sm text-center textShadow-lg"> {item.name} </p>
          <button className='border-b px-2 border-black hover:bg-primaryColor hover:text-black hover:rounded-md' onClick={() => openFile(item.name)}>Read pdf</button>
        </section>
      ) : null
    )}
  </div>
  )
}

export default Shelf


// element.style {
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   justify-content: center;
//   gap: 1rem;
//   background: linear-gradient(199deg, black -67%, transparent);
// text-shadow: 0px 3px 17px;
// }

// button
// element.style {
//   border-bottom: 2px solid red;
//   border-radius: 2rem;
//   background: brown;
//   height: 2.3rem;
//   /* padding: .31rem 0; */
//   font-weight: 600;
//   text-transform: uppercase;
//   font-size: .75rem;
// }
