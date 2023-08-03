//import model
const ClientData = require("../models/clientData");

//define route handler
exports.getCancelledClients = async(req,res) =>{
    try {
        const cancelledClientCount = await ClientData.countDocuments({ status: 'Cancelled' });
        res.json({ count: cancelledClientCount });
      } catch (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          data: 'Internal Server Error',
          message: err.message,
        });
      }
}