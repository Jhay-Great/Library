import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'

import Breadcrumbs from '../components/Breadcrumb'
import data from '../../data' // for testing purposes
import Headings from '../components/Headings'
import { filterDuplicate, getCount } from '../helpers/filter'
import { httpGetEntireCollection, httpSubmitCollection } from '../helpers/httpRequest'
import MainContainer from '../components/MainContainer'

function Collections() {

    const [dataCollections, setDataCollections] = useState(data);  // for testing without server
    // const [dataCollections, setDataCollections] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [pdfFile, setPdfFile] = useState('');
    const [responseFromApi, setResponseFromApi] = useState('');
    
    /**uncomment when working with server */
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

    const filteredData = useMemo(() => filterDuplicate(dataCollections), [dataCollections])
    const ref = useRef();

    const handleChange = function (e) {
        setInputValue(e.target.value);
        
    }

    const handleChangeInPdfFile = function(e) {
        setPdfFile(e.target.files[0]);
    }

    const handleSubmit = async function (e) {
        e.preventDefault();
        setInputValue('');
        ref.current.value = ''; //try to gain understanding
        const formData = new FormData(e.target);
        formData.append('pdf', pdfFile);

        // console.log(Object.fromEntries(formData));
        
        const response = await httpSubmitCollection(formData);
        console.log(response);
        setResponseFromApi(response);
        
    }


    
    
  return (
    <MainContainer>
        <Headings children='Collections' />
        
        <section>
            {/* <Breadcrumbs /> */}
            <input type="text" placeholder='Browser collections' />
            <button>Search</button>
            <button>Filter</button>
        </section>

        <section>
            <Headings children='Available collection' tag='h2' />
            
            <div className='w-full min-h-40 p-2 flex flex-col gap-10 items-center flex-wrap sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-5'>
            {/* convert the collections into links */}
                {dataCollections.length !== 0 ? filteredData.map(item => (
                <Link to={`/library/${item.genre}`} key={item.id} className='w-full sm:w-52 h-36 md:w-80 md:h-56 bg-slate-900 border rounded text-center flex flex-col gap-5 text-white overflow-hidden after:w-[5px] after:h-full after:absolute after:bg-red-500 relative'> 
                    <p className='mt-4'>{item?.genre?.replace(item.genre.at(0), item.genre.at(0).toUpperCase())}</p>
                    <p>Number of available file: {getCount(dataCollections, item.genre)} </p>
                    {/* <p>{data.name}</p> */}
                </Link>
                )) : <p>No Collection available</p> }
            </div>
            
        </section>

        <section>
            <Headings children='Add new collections' tag='h2' />
            
            <form onSubmit={handleSubmit} className='mb-5 flex flex-col gap-3'>
                <div className='flex gap-3 flex-wrap'>
                    <input type="text" onChange={handleChange} value={inputValue} name='collection' placeholder='Enter your desired collection' required className='px-2 bg-transparent border-b-2 flex-auto' />
                    <input type="file" accept='application/pdf' onChange={handleChangeInPdfFile} required ref={ref} className='flex-auto'  />
                </div>
                <button type='submit' className='max-w-md h-10 bg-primaryColor rounded-md font-bold text-white'>Add to collection</button>
            </form>
            
            <p>
                {/*If the collection or files you are looking for is not amongst the list of collections and files we have in our library or you will like to suggest a file or collection that will be great benefit, kindly make a suggestion of the collection or file you intend to see in the library. */}Communicate with us the intended file or collection and see your favorite collection or file in the library. <Link to='/about' className='underline text-blue-200'>Message us</Link>
            </p>
            
        </section>
        {
            responseFromApi ? (
                <div className='w-fit h-fit p-10 rounded-lg absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 bg-blue-800'>
                    <p className='text-white font-bold text-3xl '> {responseFromApi.message} </p>
                    <button onClick={() => setResponseFromApi(null)}>Ok</button>
                </div>
            ) : null
        }
    </MainContainer>
  )
}

export default Collections


// TODO: collection color should be dependent on the available number of resources upload
/**
 * resources 
 *      < 10 => 'red'
 *      > 10 => 'yellow'
 *      > 20 => 'green'
 */









