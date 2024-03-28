const multer = require('multer');
const pathName = require('./path');

// setting up storage
const storage = multer.diskStorage({
    // set up destination
    destination(req, file, cb) {
        cb(null, pathName);
    },
    // set up filename
    filename(req, file, cb) {
        cb(null, file.originalname); //would handle duplication
    },
})

const upload = multer({storage: storage});


module.exports = upload;




