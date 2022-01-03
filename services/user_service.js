UserModel ={};
const userSchema = require('../models/user_model.js')

UserModel.Create_UserService = async(req,res)=>{
    try{
       return await userSchema.create(req)
    }
    catch(err){
        return err
    }
}
// check email
UserModel.Checkemail = async(req,res)=>{
    try{
       return await userSchema.find({email:req})
    }
    catch(err){
        res.send(
            {
                "code":err.code,
                "message":err.message
            })
    }
}


module.exports = UserModel;

