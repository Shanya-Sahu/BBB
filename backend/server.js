
const express = require('express');
const cors = require('cors');
const app = express();

// to enable CORS for all routes
app.use(cors());

//load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for client API
const clientRoutes = require('./routes/clients');

//mount the client api routes
app.use("/api/v1",clientRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the DB
const dbConnect = require('./config/db');
dbConnect();

//default route
app.get('/',(req,res) =>{
    res.send(`<h1>This is homepage</h1>`);
})