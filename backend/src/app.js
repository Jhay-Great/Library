const express = require('express');
const cors = require('cors');
const path = require('path');

const genreRouter = require('./routes/collection.routes');
const libraryRouter = require('./routes/library.routes');

const app = express();


app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use('/file', express.static(path.join(__dirname, '..', './files')));
app.use(express.json());
app.use('/collection', genreRouter);
// app.use('/library', libraryRouter);


module.exports = app; 


