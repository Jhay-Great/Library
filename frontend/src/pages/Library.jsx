import React, { useEffect, useState } from 'react'

import Headings from '../components/Headings'
import MainContainer from '../components/MainContainer'
import useCollection from '../helpers/useCollection'
import { httpGetEntireCollection } from '../helpers/httpRequest'

import CollectionShelf from '../components/CollectionShelf'
import { filterDuplicate } from '../helpers/filter'



function Library() {
  
  const [state, setState] = useState(null);
  const BASE_API = 'http://localhost:8009'

  // fetch(`${BASE_API}/collection`).then(res => res.json()).then(data => setState(data));

  useEffect(() => {
    const getData = async function() {
      const response = await httpGetEntireCollection();
      setState(response);
    }
    getData();
  }, [])

  return (
    <MainContainer>
        <Headings children='Library' />
        <p>Skim or search through our Library </p>

        <section>
            <input type="search" />
            <button>Search</button>
        </section>


        
      {
          filterDuplicate(state)?.map(item => 
            <section key={item.id}>
              <CollectionShelf collectionType={item.collection} data={state} />
              {/* <h3>{uc.collection}</h3>
              <p>{uc.name}</p> */}
            </section>)
      }
      {/* {
          state?.map(item => 
            <section key={item.id}>
              <CollectionShelf collectionType={item.collection} data={state} />
            </section>)
      } */}
    </MainContainer>
  )
}

export default Library