const express = require('express');
const upload = require('./upload');

upload.single('avartar');
upload.array('albums', 12);

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('pulic'));

app.listen(process.env.PORT || 3000, function(){
    console.log('Server is listening at port 3000');
});

app.get('/', (req, res) => res.render('home'));

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) res.send(`Error: ${err}`);
        res.send('Success');

        // req.file;
        // req.files;
    });
});

console.log(Date());