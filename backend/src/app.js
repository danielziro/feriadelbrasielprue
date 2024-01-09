const express = require('express');
const cors = require('cors'); 
const fileUpload = require ('express-fileupload');

const app = express();

//settings
app.set('port', process.env.PORT || 3500);
//middlewares
app.use(cors());
app.use(express.json());
app.use(fileUpload({
    createParentPath:true,
}))
//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/clothes', require('./routes/clothes'));



module.exports = app;