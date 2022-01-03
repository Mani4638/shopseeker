const mongoose = require("mongoose");
const geocoder=require('../untils/geocoder');
const Schema = mongoose.Schema;
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true
  },
  coordinates: {
    type: [],
    required: true
  }
});
  const reg_provider = new Schema({
    Storename:{type:String,required:true},
    address:{ type:String,required:true,},
    location: {
             type: pointSchema,
             index: '2dsphere' // Create a special 2dsphere index 
           },
    
    createdAt:{
        type:Date,
        default:Date.now
    },
    
});
//reg_provider.index({ location:"2dsphere" });

module.exports=mongoose.model('shop',reg_provider);
