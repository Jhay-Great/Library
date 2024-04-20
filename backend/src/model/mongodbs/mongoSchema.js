const { model, Schema } = require('mongoose');

const collectionsSchema = new Schema({
    // uploadedBy: {
    //     type: String,
    //     required: true,
    // },
    id: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
}) 

module.exports = model('dbCollection', collectionsSchema);

//  = dbSchema;