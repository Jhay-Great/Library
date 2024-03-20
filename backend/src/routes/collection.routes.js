const express = require("express");

const {
  // postGenre,
  httpGetEntireCollection,
  httpGetCollectionItem,
  httpAddToCollection,
} = require("../controller/collection.controller");
const upload = require('../utils/multer');

const collectionRouter = express.Router();

collectionRouter.get("/", httpGetEntireCollection);
// collectionRouter.post('/', postGenre);
collectionRouter.post('/', upload.single('pdf'), httpAddToCollection)
collectionRouter.get("/:genreId", httpGetCollectionItem);

module.exports = collectionRouter;
