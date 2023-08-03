//import model
const ClientData = require("../models/clientData");

//define route handler
exports.getTotalClients = async(req,res) =>{
    try {
        const count = await ClientData.countDocuments({});
        res.json({ count });
      }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:'Internal Server Error',
            message:err.message,
        })
    }
}