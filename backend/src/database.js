const mongoose = require("mongoose");
const connection = mongoose.connection;

//Conexión bd

const URI = process.env.DB_URI
  ? process.env.DB_URI
  : "mongodb://localhost/test";


  mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

//error
.catch(err => console.log(err));

//Conexión exitosa

connection.once("open", () => {
  console.log("DB IS CONNECTED");
})

//BD conectada a...
connection.once('open', _=> {
  console.log('DB IS CONNECTED TO', URI);
})

//Error
connection.on('error', err => {
  console.log(err);
})