import React, { useCallback } from 'react'
import { getSpecificCollections, firstLetterToUpperCase } from '../helpers/filter'
import Shelf from './Shelf'

function CollectionShelf({collectionType='', data=[]}) {
  // const rr = useCallback(firstLetterToUpperCase(collectionType));
  return (
    <section>
        {/* <h3> { rr } </h3> */}
        <h3> {firstLetterToUpperCase(collectionType)} </h3>
        <hr className='' />
        {/* <h3> {collectionType} </h3> */}
        {/* <div className='w-full flex gap-10 flex-wrap '>
          {getSpecificCollections(data, collectionType).map(item => ( item.name ? (
              <section key={item.id} className='w-52 h-40 border rounded'>
                  <p className='text-sm text-center'> {item.name} </p>
              </section>
              ) : null
          ))}

        </div> */}
        <Shelf dataCollection={data} query={collectionType} />
    </section>
  )
}

export default CollectionShelf