const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

//settings

app.set('port', process.env.PORT || 4000);

//middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(multer({
dest:("public/uploads")
}).single("image"));
//routes

app.use('/api/users', require('./routes/users'));

app.use('/api/login', require('./routes/login'));

app.use('/api/articles', require('./routes/articles'));


module.exports = app;
