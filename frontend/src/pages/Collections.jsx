import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Breadcrumbs from '../components/Breadcrumb'
// import data from '../../data' // for testing purposes
import Headings from '../components/Headings'
import { filterDuplicate, getCount } from '../helpers/filter'
import { httpGetEntireCollection, httpSubmitCollection } from '../helpers/httpRequest'
import MainContainer from '../components/MainContainer'

function Collections() {

    const [dataCollections, setDataCollections] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [pdfFile, setPdfFile] = useState('');
    const [responseFromApi, setResponseFromApi] = useState('');
    

    useEffect(() => {
        const fetchData = async function () {
            const response = await httpGetEntireCollection();
            setDataCollections(response);
        }
        fetchData();
    }, [responseFromApi]);

    const handleChange = function (e) {
        setInputValue(e.target.value);
        
    }

    const handleChangeInPdfFile = function(e) {
        setPdfFile(e.target.files[0]);
    }

    const handleSubmit = async function (e) {
        e.preventDefault();
        setInputValue('');
        const formData = new FormData(e.target);
        formData.append('pdf', pdfFile);

        // console.log(Object.fromEntries(formData));
        
        const response = await httpSubmitCollection(formData);
        console.log(response);
        setResponseFromApi(response);
        
    }

    // if (!dataCollections) {
    //     return (
    //         <M
    //     )
    // }
    
    
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
                {dataCollections ? filterDuplicate(dataCollections).map(item => (
                <div key={item.id} className='w-52 h-36 bg-slate-300 border rounded text-center flex flex-col gap-5 py-2'>
                    <p>{item?.genre?.replace(item.genre.at(0), item.genre.at(0).toUpperCase())}</p>
                    <p>Number of available file: {getCount(dataCollections, item.genre)} </p>
                    {/* <p>{data.name}</p> */}
                </div>
                )) : <p>No Collection available</p> }
            </div>
        </section>

        <div>
            <Headings children='Add new collections' tag='h2' />

            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type="text" onChange={handleChange} value={inputValue.collection} name='collection' />
                <input type="file" accept='application/pdf' onChange={handleChangeInPdfFile} />
                {/* {
                    pdfFile && pdfFile['0'].size 
                } */}
                <button type='submit'>Add to collection</button>
            </form>
            
            <p>
                {/*If the collection or files you are looking for is not amongst the list of collections and files we have in our library or you will like to suggest a file or collection that will be great benefit, kindly make a suggestion of the collection or file you intend to see in the library. */}Communicate with us the intended file or collection and see your favorite collection or file in the library. <Link to='/about' className='underline text-blue-200'>Message us</Link>
            </p>
            
        </div>
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