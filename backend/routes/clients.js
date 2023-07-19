const express = require('express');
const router =express.Router();

//import controller
const {addNewClient} = require('../controllers/addNewClient');
const {getClientData, getClientDataById} = require('../controllers/getClientData');
const {updateClientData} = require('../controllers/updateClientData');
const {deleteClientData} = require('../controllers/deleteClientData');

//define API routes
router.post("/addNewClient", addNewClient);
router.get("/getClientData", getClientData);
router.get("/getClientData/:id", getClientDataById);
router.put('/updateClientData/:id',updateClientData);
router.delete('/deleteClientData/:id',deleteClientData);

module.exports = router;