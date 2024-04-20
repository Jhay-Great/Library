// const BASE_API = 'http://localhost:8009'
const BASE_API = 'https://library-x1oq.onrender.com';

// @Get request / getting entire collection
export const httpGetEntireCollection = async function() {

    // const response = await fetch(`${BASE_API}/collection`);
    // const response = await fetch(`${BASE_API}/collection`);
    // console.log(response);
    // return await response.json();
    
    try {
        const response = await fetch(`${BASE_API}/collection`);
        // console.log(response);
        if (!response.ok) throw new Error('Failed to fetch data, Refresh page');
        return response.json();

    } catch (error) {
        return {
            response: 'failed',
            message: error.message,
        }
    }

    /**fetch request option 2 */ 
    // try {
    //     const response = httpFetch();
    //     if (!response.ok) return `Could not fetch data`;
    //     return response.json();
        
    // } catch (error) {
    //     return `Internal server error ${error.message}`;
    // }
    
    // try {
    //     const response = await fetch(`${BASE_API}/collection`);
    //     if (!response) {
    //         console.log(response.status);
    //         throw new Error ('Failed to fetch data');
    //     }
    //     console.log('data received');
    //     return await response.json();
    // } catch (error) {
    //     console.log(error.message);
    //     return error;
    // }
    
}

// @GET request/id - getting individual element or collection or book
export const httpGetItem = async function(item) {
    try {
        // item is the filename
        const response = await fetch(`${BASE_API}/collection/:${item}`)
        if (!response.ok) throw new Error('Request failed, search query is not available');

    } catch (error) {
        console.log(`Error ${error}`);
    }
}

// @POST request / submission
export const httpSubmitCollection = async function(data) {
    // console.log(Object.fromEntries(data));
    // console.log(data);
    const response = await fetch(`${BASE_API}/collection`, {
        method: 'POST',
        // headers: {
        //     // "Content-Type": "multipart/form-data",
        //     // "Content-Type": "application/json",
        // },
        body: data,
        // body: JSON.stringify(Object.fromEntries(data)),
    });
    

    try {
        if (!response.ok) throw new Error('Upload failed, Refresh and try again')
        return await response.json();
    } catch (error) {
        console.log(error);
        return error.message;
    }
}


