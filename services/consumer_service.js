const consumerModel =require('../models/consumer_model');

const createConsumer = async(req,res)=>{
    try{
        return await consumerModel.create(req)
    }catch(err){
       return({'code':err.code,'message':err.message})
       
    }
}

const FindConsumer =async (req,res)=>{
    try{
        
        return await consumerModel.find(req)
        .populate(["storeId","consumerId"])
    }catch(err){
        return ({'code':err.code,'message':err.message})
    }
}
const searchConsumer =async (req,res)=>{
    try{
        return await consumerModel.find(req)
        .populate(["storeId","consumerId"])
    }catch(err){
        return ({'code':err.code,'message':err.message})
    }
}

const updateConsumer = async(req,res)=>{
    try{
        let update = await consumerModel.findById(req.body['id']);
        let body =req.body;
        let get = Object.assign(update,body);
        return await update.save();
    }catch (err){ res.send({'err':err,'message':req.files});}
}

module.exports={createConsumer,FindConsumer,updateConsumer,searchConsumer}