const mongoose = require('mongoose')

const mongodbUrl = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready...')
});

mongoose.connection.on('error', (err) => {
    console.error(`db connection failed...`)
})

module.exports = async function mongodbDriver() {
    await mongoose.connect(mongodbUrl)

}
// mongodbDriver();