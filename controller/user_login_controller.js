const UserLogin =require('../services/user_login_service');
const common = require('../common/bcrypt.js');
const token =require('../common/token');
const jwt = require('jsonwebtoken');
const config =require('../config/config')

userLoginCtrl={};

userLoginCtrl.findUser=(req,res)=>{
    let reqs = req.body;
    console.log(reqs)

    UserLogin.Checkemail(reqs.email).then(result=>{
        console.log(result)
        if(result.length>0){
            common.compareHash(reqs.password,result[0]['password']).then(pass=>{
                console.log(pass)
                if(pass){
              let tok =   token.jwt(reqs)
                    console.log(tok)
       
                    res.send({"message":"Login Sucessfully","data":result,"token":tok})

                }else{
                    res.send({"message":"Incorrect password"})
                }
            },err=>{
                res.send({"code":err.code,"message":err.message})
            })
            }

            
            // UserLogin.findLongin(reqs).then(result=>{
            //     res.send({"code":200,"message":"login Successfully","data":result})
            // })   
        else{
            res.send({"message":"Incorrect Email ID"})
        }
    },err =>{
        res.send({"code":err.code,"message":err.message,err:err})
    })
}
module.exports=userLoginCtrl;