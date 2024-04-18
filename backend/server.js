const http = require('http');
const mongoose = require('mongoose')
require('dotenv').config();


const app = require('./src/app');
const dbConnection = require('./src/config/db.config')

// const mongodbUrl = process.env.MONGO_URL;
const PORT = process.env.PORT || 8002;

const server = http.createServer(app);

// mongoose.connection.once('open', () => {
//     console.log('MongoDB connection ready...')
// });

// mongoose.connection.on('error', (err) => {
//     console.error(err)
// })

// async function mongodbDriver() {
//     await mongoose.connect(mongodbUrl)

// }
// mongodbDriver();

server.listen(PORT, async () => {
    await dbConnection();
    console.log(`Running server on port ${PORT}...`);
});


