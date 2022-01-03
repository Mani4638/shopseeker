const Userlogin = require("../models/user_model");

userMaster={};
userMaster.findLongin= async(req,res)=>{
    try{
        return await Userlogin.findOne(req)
    }
    catch (err){
         return err
    }
}

userMaster.Checkemail = async(req,res)=>{
    try{
       return await Userlogin.find({email:req})
    }
    catch(err){
        res.send(
            {
                "code":err.code,
                "message":err.message
            })
    }
}
module.exports=userMaster;
