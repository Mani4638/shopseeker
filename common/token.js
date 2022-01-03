const jwt = require('jsonwebtoken');
const config =require('../config/config')

 var token={};

token.jwt= function(resp){
    return jwt.sign(resp,config.secret_key,{  expiresIn: '24h'  })
      
}
module.exports=token;