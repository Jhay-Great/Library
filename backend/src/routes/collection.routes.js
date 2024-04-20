const express = require("express");

const {
  httpGetEntireCollection,
  httpGetCollectionItem,
  httpAddToCollection,
} = require("../controller/collection.controller");
const upload = require('../utils/multer');

const collectionRouter = express.Router();

collectionRouter.get("/", httpGetEntireCollection);
collectionRouter.post('/', upload.single('pdf'), httpAddToCollection)
collectionRouter.get("/:genreId", httpGetCollectionItem);

module.exports = collectionRouter;
