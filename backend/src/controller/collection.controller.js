const { getEntireCollection, getCollectionItem, addToCollection } = require('../model/collection.model')

// function postGenre(req, res) {

//     if (!req.body.genre || !req.body.inStock) {
//         return res.status(400).json({error: 'Invalid stock entered, kindly provide all necessary details'})
//     }
    
//     const newGenre = {
//         id: model.length + 1,
//         genre: req.body.genre,
//         inStock: req.body.inStock,
//         samples: []
//     }
//     model.push(newGenre);
//     res.json(model);
// }

async function httpGetEntireCollection(req, res) {
    return res.json(await getEntireCollection());
}

function httpGetCollectionItem(req, res) {
    const {genreId} = req.params;
    const genre = getCollectionItem(genreId);
    return res.json(genre);
}

function httpAddToCollection(req, res) {
    const {collection} = req.body;
    const originalname = req.file;
    const file = { collection, originalname }
    console.log(originalname);
    // validating inputs
    // if (!collection || !originalname) return res.status(401).json({message: 'Invalid input'})
    // console.log(req.file);
    // console.log(collection);
    const response = addToCollection(file);
    if (!response) return res.status(400).json({message: response});
    // console.log(response); 
    // console.log(error);
    res.status(201).json({message: response});
    // try {
    //     if (!response) throw new Error('Failed to upload');
    //     return res.status(201).json({message: response});
        
    // } catch (error) {
    //     return res.status(400).json({message: response});
    // }
}

/** trying to get collection by either "Frontend", "Backend", "Programming" */
// function httpGetCollectionItemByGenre(req, res) {
//     const { genreId } = req.params;

// }

module.exports = {
    // postGenre,
    httpGetEntireCollection,
    httpGetCollectionItem,
    httpAddToCollection,
}