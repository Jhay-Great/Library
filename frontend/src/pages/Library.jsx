import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Headings from '../components/Headings'
import MainContainer from '../components/MainContainer'
import useCollection from '../helpers/useCollection'
import { httpGetEntireCollection } from '../helpers/httpRequest'

import CollectionShelf from '../components/CollectionShelf'
import { filterDuplicate } from '../helpers/filter'
import data from '../../data';


function Library() {
  
  const [state, setState] = useState(null);

  // fetch(`${BASE_API}/collection`).then(res => res.json()).then(data => setState(data));

  useEffect(() => {
    const getData = async function() {
      // const response = await httpGetEntireCollection();
      // setState(response);
      // console.log(state);
      const response = await httpGetEntireCollection();
      if (response.response === 'failed') {
        return setState(null)
      }
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
          state !== null && filterDuplicate(state)?.map(item => 
            <section key={item.id}>
              <CollectionShelf collectionType={item.genre} data={state} />
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