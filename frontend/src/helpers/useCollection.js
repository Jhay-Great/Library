import { useCallback, useEffect, useState } from 'react'
import { httpGetEntireCollection } from './httpRequest'

const useCollection = function() {
    const [data, setData] = useState([])

    const getData = useCallback(async () => {
        const fetchedData = await httpGetEntireCollection();
        setData(fetchedData)
    }, [])

    useEffect(() => {
        getData();
    }, [getData])

    return data;
}

export default useCollection

// let state;


// export const getData = async function() {
//     const fetchedData = await httpGetEntireCollection();
//     state = fetchedData;
//     console.log(state)
// }

