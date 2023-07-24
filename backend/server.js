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

// Define a POST route for adding new clients
app.post('/addNewClient', (req, res) => {
    // Assuming you have a database model/schema for clients, import it here
    const Client = require('./models/clientData');
  
    // Extract form data from the request body
    const { name, email, phone, service , status, updatedAt} = req.body;
  
    // Create a new client object based on the model/schema
    const newClient = new Client({
      name,
      email,
      phone,
      service,
      status,
      updatedAt
    });
  
    // Save the new client to the database
    newClient.save((err, savedClient) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while saving the client.' });
      } else {
        res.status(201).json({ message: 'Client added successfully', client: savedClient });
      }
    });
  });
  

//import routes for client API
const clientRoutes = require('./routes/clients');

//mount the client api routes
app.use('/api/v1', clientRoutes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//connect to the DB
const dbConnect = require('./config/db');
dbConnect();

//default route
app.get('/', (req, res) => {
  res.send('<h1>This is homepage</h1>');
});
