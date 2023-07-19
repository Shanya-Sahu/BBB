//import model
const ClientData = require("../models/clientData");

//define route handler
exports.updateClientData = async(req,res) =>{
    try{
        //another way to fetched data find by id in db
        const {id} = req.params;
        const {name, email, phone, service, updatedAt, status} = req.body;

        const result = await ClientData.findByIdAndUpdate(
            {_id:id},
            {name, email, phone, service,status, updatedAt: Date.now()},
            )
        
            
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:result,
            message:'Data updated successfully!',
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


