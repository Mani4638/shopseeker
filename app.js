const http = require("http");
const express = require("express");
const mongoose =require("mongoose");
const bodyparser=require("body-parser");
const cors = require("cors");
const moment =require("moment")
const app = express();
const color = require("colors")
const fs =require("fs")
const hostname ="127.0.0.1";

//const port="3000";
const server = http.createServer(app)
const config = require("./config/config");
const common = require("./common/bcrypt")
const port=config.node_port
 //mongoose.Promise = global.Promise;

app.use(bodyparser.json());
//app.use(bodyParser.raw())

app.use(cors());

server.listen(port, ()=>{
   console.log(color.red('HTTP Server running on port'+ port))
   console.log(color.bgBlue("+++++++++++++++++++++++++++++++++++++"));
   
  mongoose.connect(`${config.db}`,{useNewUrlParser: true,useUnifiedTopology:true})
  .then(()=>{
        console.log("amazon-Database connected as successfully")
        let router = require('./router.js')
   
    // //   common.compareHash('test',input).then(input2=>{
    // //     console.log(input2)

    //   },err=>{
    //       console.log(err)
    //   })
        
      
         router(app)
    },err =>{
        console.log("Amazon - Database connection error")
    })
})

