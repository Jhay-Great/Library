const generateId = require('generate-unique-id');
const dbCollections = require('./mongodbs/mongoSchema');

const getEntireCollection = async () => {
    const db = await dbCollections.find({});
    return db;
};

// const getCollectionItem = (id) => getEntireCollection()[ +id - 1 ];
const getCollectionItem = id => isNaN(+id) ? getItem(id) : getEntireCollection()[ +id - 1 ];


function getItem(name) {
    return getEntireCollection().filter((item) => item.genre === name)
}

function addToCollection(data) {
    const response = createNewCollection(data);
    try {
        if (!response) throw new Error('Upload failed')
        dbCollections.create(response);
        return 'Upload was successful';
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

function createNewCollection(file) {
    const { collection: name, originalname: pdfName } = file;
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

