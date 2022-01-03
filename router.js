const jwt = require("jsonwebtoken");
const config =require("./config/config");
const fs = require("fs");
const bcrypt=require("bcrypt-nodejs");
const userController=require("./controller/user_controller");
const loginController=require("./controller/user_login_controller");
const providerController= require("./controller/provider_controller");
const consumerController=require("./controller/consumer_controller");


module.exports = function(app){
console.log("app")
app.post("/api/signup",userController.createuser);
app.get("/api/login",loginController.findUser);
app.post("/api/provider",providerController.create_provider)
app.get("/api/provider",providerController.Find_provider)
app.post("/api/consumer",consumerController.create_Consumer)
app.get("/api/consumer",consumerController.Find_Consumer)
app.put("/api/consumer/:id",consumerController.update_consumer)
app.get("/api/consumerSearch",consumerController.search_Consumer)
}