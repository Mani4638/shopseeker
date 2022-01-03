const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const consumer = new Schema({
    storeId:[{ type: Schema.Types.ObjectId, ref: 'shop' }],
    consumerId:[{ type: Schema.Types.ObjectId, ref: 'user' }],
    status :{type:String},

    createdAt:{
        type:Date,
        default:Date.now
    },

});
module.exports=mongoose.model('history',consumer)