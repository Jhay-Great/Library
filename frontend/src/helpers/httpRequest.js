const BASE_API = 'http://localhost:8009'

export const httpGetEntireCollection = async function() {

    const response = await fetch(`${BASE_API}/collection`);
    return await response.json();
}

export const httpSubmitCollection = async function(data) {

    const response = await fetch(`${BASE_API}/collection`, {
        method: 'POST',
        // headers: {
        //     // "Content-Type": "multipart/form-data",
        //     // "Content-Type": "application/json",
        // },
        body: JSON.stringify(Object.fromEntries(data)),
    });
    

    try {
        if (!response.ok) throw new Error('Upload failed, Refresh and try again')
        return await response.json();
    } catch (error) {
        console.log(error);
        return error.message;
    }
}


