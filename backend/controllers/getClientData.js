//import model
const ClientData = require("../models/clientData");

//define route handler
exports.getClientData = async(req,res) =>{
    try{

        //fetch all client data  from db
        const response = await ClientData.find({});

        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entire Data is fetched!'
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


//get single client data by their id

exports.getClientDataById = async(req,res) => {
    try{
        const id = req.params.id;
        const result = await ClientData.findById({_id: id})

        //data for given id not found
        if(!result){
            return res.status(404).json({
                success:false,
                message:"Not Found",
            })
        }
        //data found 
        res.status(200).json({
            success:true,
            data:result,
            message:`Client ${id} data successfully fetched.`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:`Server Error`,
        })
    }
}
