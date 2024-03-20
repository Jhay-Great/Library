const express = require("express");
const {
  httpGetEntireCollection,
  httpGetCollectionItem,
} = require("../controller/collection.controller");

const libraryRouter = express.Router();

libraryRouter.get("/", httpGetEntireCollection);
libraryRouter.get("/:collectionId", httpGetCollectionItem);

module.exports = libraryRouter;
