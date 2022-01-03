UserController = {};
const Userservice = require('../services/user_service.js');
const common =require("../common/bcrypt.js");

     UserController.createuser = (req,res)=>{
        let reqs = req.body;
        console.log(reqs)
       // console.log(req.query)

        Userservice.Checkemail(reqs.email).then(result=>{
           // let reqs = req.body;
            if(result.length==0){
                common.genHash(reqs.password).then(pass=>{
                    reqs['password']=pass;
                    console.log(reqs);
                     Userservice.Create_UserService(reqs).then(result=>{
                   res.send({"code":200,"message":"Created successfully","data":result})
                 },err=>{
                     res.send({"code":err.code,"message":err.message,"err":err})
                 })   
                })
                    
            }else{
                res.send("This Email ID Already Exists")
            }       
            
        },err=>{
            res.send({'code':err.code,'message':err.message,'err':err})
        });
    };
 module.exports = UserController; 
 
 