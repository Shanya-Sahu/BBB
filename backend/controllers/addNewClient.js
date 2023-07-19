//import model
const ClientData = require("../models/clientData");

//define route handler
exports.addNewClient = async(req,res) =>{
    try{
        //extract data from request body
        const{name, email, phone, service, status} = req.body;

        //create a new client obj and insert in DB
        const response = await ClientData.create({name,email,phone,service,status});

        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Created Successfully!'
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