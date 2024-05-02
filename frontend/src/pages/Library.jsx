import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Headings from '../components/Headings'
import MainContainer from '../components/MainContainer'
import useCollection from '../helpers/useCollection'
import { httpGetEntireCollection } from '../helpers/httpRequest'

import CollectionShelf from '../components/CollectionShelf'
import { filterDuplicate } from '../helpers/filter'
import data from '../../data';
import Input from '../components/Input'



function Library() {
  
  const [state, setState] = useState(data); // for local testing without server
  // const [state, setState] = useState(null);

  // fetch(`${BASE_API}/collection`).then(res => res.json()).then(data => setState(data));

  /**uncomment for production / comment for dev mode */
  // useEffect(() => {
  //   const getData = async function() {
  //     // const response = await httpGetEntireCollection();
  //     // setState(response);
  //     // console.log(state);
  //     const response = await httpGetEntireCollection();
  //     if (response.response === 'failed') {
  //       return setState(null)
  //     }
  //     setState(response);
      
  //   }
  //   getData();
  // }, [])

  // input - search {
//   background: transparent;
//   border: 1px solid;
//   color: black;
//   padding: .1rem .5rem;
// }

  return (
    <MainContainer>
        <Headings children='Library' />
        <p>Skim or search through our Library </p>

        <section className='flex gap-4'>
            <Input placeholder='Browse library' />
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




