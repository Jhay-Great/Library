import React, { useState } from 'react'

import { getSpecificCollections } from '../helpers/filter'

function Shelf({dataCollection, query}) {

    const openFile = function(pdf) {
      console.log(pdf)
        window.open(`http://localhost:8009/file/${pdf}`, '_blank', 'noreferrer');
    }

  return (
    <div className="w-full flex gap-10 flex-wrap ">
    {getSpecificCollections(dataCollection, query).map((item) =>
      item.name ? (
        <section key={item.id} className="w-52 h-40 border rounded">
          <p className="text-sm text-center"> {item.name} </p>
          <button onClick={() => openFile(item.name)}>Read pdf</button>
        </section>
      ) : null
    )}
  </div>
  )
}

export default Shelf