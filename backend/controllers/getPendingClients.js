//import model
const ClientData = require("../models/clientData");

//define route handler
exports.getPendingClients = async(req,res) =>{
    try {
        const pendingClientCount = await ClientData.countDocuments({ status: 'Pending' });
        res.json({ count: pendingClientCount });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: 'Internal Server Error',
          message: err.message,
        });
      }
}