import { useEffect, useState } from 'react'

import data from '../data';
import { set } from '../../backend/src/app';

const [state, setState] = useState(null);

useEffect(() => {
    const getData = async function() {
        const response = await httpGetEntireCollection();
        if (response.response === 'failed') {
            setState([]);
            return state;
        }
        setState(response);
        return state;
    }
    getData();
}, []);


    // useEffect(() => {
    //     const fetchData = async function () {
    //         const response = await httpGetEntireCollection();
    //         //TODO: proper error handling to be implemented
    //         if (response.response === 'failed') {
    //             return setDataCollections([]);
    //         }
    //         setDataCollections(response);



            
    //     }
    //     fetchData();
    // }, [responseFromApi]);

    // useEffect(() => {
    //   const getData = async function() {
    //     const response = await httpGetEntireCollection();
    //     setState(response);
    //   }
    //   getData();
    // }, [])

    // const useCollection = function() {
    //     const [state, setState] = useState([]);

    //     // http call to get data

    // }


/**Getting hard coded data */
