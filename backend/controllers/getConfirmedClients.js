//import model
const ClientData = require("../models/clientData");

//define route handler
exports.getConfirmedClients = async(req,res) =>{
    try {
        const confirmedClientCount = await ClientData.countDocuments({ status: 'Confirmed' });
        res.json({ count: confirmedClientCount });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: 'Internal Server Error',
          message: err.message,
        });
      }
}