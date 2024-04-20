const { getEntireCollection, getCollectionItem, addToCollection } = require('../model/collection.model')


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
    //TODO: add validation

    const response = addToCollection(file);
    if (!response) return res.status(400).json({message: response});
    res.status(201).json({message: response});

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