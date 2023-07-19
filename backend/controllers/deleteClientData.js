//import model
const ClientData = require("../models/clientData");

//define route handler
exports.deleteClientData = async(req,res) =>{
    try{
        //another way to fetched data find by id in db
        const {id} = req.params;
        const result = await ClientData.findByIdAndDelete(id);
        
            
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:result,
            message:'Data deleted successfully!',
        });
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


