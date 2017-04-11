
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => {
        cb(null,  `${Date.now()}${file.originalname}`);
        console.log(file.encoding);
        console.log(file.mimetype);
        console.log(file.size);
    }
});

const fileFilter = function(req, file, cb){
    if(file.mimetype !== 'image/png'){
        //cb(new Error('File is not valid extension!'));
        req.error = 'File is not valid extension!';
        cb(null, false);
    }
    else {
        cb(null, true);
    }
}

const limits = {
    fileSize: 100 * 1024
}

module.exports = multer({
    storage,
    fileFilter,
    limits
});