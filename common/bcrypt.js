const bcript =require("bcrypt-nodejs");
const config =require("../config/config");
const fs = require("fs")

var common={}
common.genHash=function(pass){
    return new Promise((resolve,reject)=>{
        bcript.hash(pass,null,null,function(err,hash){
            if(err)return reject(err.message)
            resolve(hash)
        })
    })
}

common.compareHash=function(pass,userPass){
    return new Promise((resolve,reject)=>{
        bcript.compare(pass,userPass,function(err,res){
            resolve(res);
        });
    });
};
module.exports=common;





