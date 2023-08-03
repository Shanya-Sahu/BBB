const express = require('express');
const router =express.Router();

//import controller
const {addNewClient} = require('../controllers/addNewClient');
const {getClientData, getClientDataById} = require('../controllers/getClientData');
const {updateClientData} = require('../controllers/updateClientData');
const {deleteClientData} = require('../controllers/deleteClientData');
const {getTotalClients} = require('../controllers/getTotalClients');
const { getConfirmedClients } = require('../controllers/getConfirmedClients');
const { getPendingClients } = require('../controllers/getPendingClients'); 
const { getCancelledClients } = require('../controllers/getCancelledClients'); 




//define API routes
router.post("/addNewClient", addNewClient);
router.get("/getClientData", getClientData);
router.get("/getClientData/:id", getClientDataById);
router.put('/updateClientData/:id',updateClientData);
router.delete('/deleteClientData/:id',deleteClientData);
router.get('/getTotalClients',getTotalClients);
router.get('/getConfirmedClients', getConfirmedClients);
router.get('/getPendingClients', getPendingClients);
router.get('/getCancelledClients', getCancelledClients);



module.exports = router;