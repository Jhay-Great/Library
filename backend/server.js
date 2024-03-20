const http = require('http');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const app = require('./src/app');



const PORT = process.env.PORT || 8002;

const mongodbUrl = process.env.MONGO_URL;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready')
});

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function mongodbDriver() {
    await mongoose.connect(mongodbUrl)

}
// mongodbDriver();

server.listen(PORT, () => {
    console.log(`Running server on port ${PORT}...`);
});


