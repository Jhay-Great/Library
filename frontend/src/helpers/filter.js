

export const filterDuplicate = function(dataArray) {
    console.log(dataArray);
    return dataArray?.filter((ar, i) => dataArray.findIndex(data => data.genre === ar.genre) === i)
}

export const getCount = function(array, name) {
    // console.log(array, name)
    const list = array.filter(arr => arr.genre === name);
    return list.length
}

export const getSpecificCollections = function(array, queryName) {
    const list = array.filter(arr => arr.genre === queryName);
    return list;
}

export const firstLetterToUpperCase = function(word) {
    return word?.replace(word?.at(0), word?.at(0)?.toUpperCase())
}







// export default filter 

