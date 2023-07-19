//to connect connection btw DB & application.
//to instantiate & activate the server
const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connection is sucuessful!");
    })
    .catch((e)=>{
        console.log("Something went wrong");
        console.error(e.message);
        process.exit(1);   // this is used to forcefully terminate the Node.js process and signal a non-zero status code, indicating an abnormal termination or failure condition.
    });
}

module.exports = dbConnect;