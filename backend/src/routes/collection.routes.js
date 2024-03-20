const express = require("express");

const {
  // postGenre,
  httpGetEntireCollection,
  httpGetCollectionItem,
  httpAddToCollection,
} = require("../controller/collection.controller");

const collectionRouter = express.Router();

collectionRouter.get("/", httpGetEntireCollection);
// collectionRouter.post('/', postGenre);
collectionRouter.post('/', httpAddToCollection)
collectionRouter.get("/:genreId", httpGetCollectionItem);

module.exports = collectionRouter;
