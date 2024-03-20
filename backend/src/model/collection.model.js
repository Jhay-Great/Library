const generateId = require('generate-unique-id');

const collection = [
    {id: 123, collection: 'frontend', name: 'HTML & CSS for Beginners'},
    {id: 129, collection: 'frontend', name: 'Eloquent Javascript'},
    {id: 143, collection: 'backend', name: 'Ultimate Nodejs and MongoDB guide'},
    {id: 133, collection: 'programming', name: 'Clean codes'},
    {id: 144, collection: 'backend', name: 'Javascript OOP'},

];

const getEntireCollection = () => collection;

// const getCollectionItem = (id) => getEntireCollection()[ +id - 1 ];
const getCollectionItem = id => isNaN(+id) ? getItem(id) : getEntireCollection()[ +id - 1 ];


function getItem(name) {
    return getEntireCollection().filter((item) => item.collection === name)
}

function addToCollection(data) {
    // console.log(data);
    const response = createNewCollection(data);
    try {
        if (!response) throw new Error('Upload failed')
        collection.push(response);
        // console.log(collection);
        return 'Upload was successful';
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

function createNewCollection(file) {
    const { collection: name, originalname: pdfName} = file;
    // console.log(pdfName.originalname);
    const collection = {
        id: generateId(),
        collection: name,
        name: pdfName.originalname,
    }
    return collection;
}





module.exports = {
    getEntireCollection,
    getCollectionItem,
    addToCollection,
}



    // {
    //     id: 1,
    //     genre: 'Romance',
    //     inStock: 40,
    //     samples: [
    //         {id: 10, name: 'Alice & John'},
    //         {id: 11, name: 'She needed him'},
    //     ],
    // },
    // {
    //     id: 2,
    //     genre: 'Kids',
    //     inStock: 123,
    //     samples: [
    //         {id: 20, name: 'Jack and the beans stalk'},
    //         {id: 21, name: 'The three little pigs'}
    //     ]
    // }