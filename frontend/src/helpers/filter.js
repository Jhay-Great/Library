

export const filterDuplicate = function(dataArray) {
    return dataArray?.filter((ar, i) => dataArray.findIndex(data => data.collection === ar.collection) === i)
}

export const getCount = function(array, name) {
    // console.log(array, name)
    const list = array.filter(arr => arr.collection === name);
    return list.length
}

export const getSpecificCollections = function(array, collectionType) {
    const list = array.filter(arr => arr.collection === collectionType);
    return list;
}

export const firstLetterToUpperCase = function(word) {
    return word.replace(word?.at(0), word?.at(0).toUpperCase())
}







// export default filter 

