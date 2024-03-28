const generateId = require('generate-unique-id');
const dbCollections = require('./mongodbs/mongoSchema');

// const dbCollectionss = [
//     {id: 123, genre: 'frontend', name: 'HTML & CSS for Beginners'},
//     {id: 129, genre: 'frontend', name: 'Eloquent Javascript'},
//     {id: 143, genre: 'backend', name: 'Ultimate Nodejs and MongoDB guide'},
//     {id: 133, genre: 'programming', name: 'Clean codes'},
//     {id: 144, genre: 'backend', name: 'Javascript OOP'},

// ];

const getEntireCollection = async () => {
    const db = await dbCollections.find({});
    // console.log(db);
    return db;
    // return dbCollectionss;
};

// const getCollectionItem = (id) => getEntireCollection()[ +id - 1 ];
const getCollectionItem = id => isNaN(+id) ? getItem(id) : getEntireCollection()[ +id - 1 ];


function getItem(name) {
    return getEntireCollection().filter((item) => item.genre === name)
}

function addToCollection(data) {
    // console.log(data);
    const response = createNewCollection(data);
    try {
        if (!response) throw new Error('Upload failed')
        // local storage or temporal storage
        // dbCollectionss.push(response);

        // db storage
        // dbCollections.create({
        //     id: response.id,
        //     genre: response.genre,
        //     name: response.name,
        // });
        dbCollections.create(response);
        // if (!isSuccessful) throw new Error('Failed to upload file');
        // console.log(collection);
        return 'Upload was successful';
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

function createNewCollection(file) {
    const { collection: name, originalname: pdfName } = file;
    // console.log(pdfName.originalname);
    const collection = {
        id: generateId(),
        genre: name,
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