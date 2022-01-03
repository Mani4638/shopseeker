const consumerSer=require('../services/consumer_service');

const create_Consumer= async(req,res)=>{
    let reqs= req.body;
    console.log(reqs);
    consumerSer.createConsumer(reqs).then(result=>{
        res.send({'code':200,'message':'created sucessfull','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
        
    })
};

const Find_Consumer= async(req,res)=>{
    let reqs = req.query;
    console.log(reqs)
    consumerSer.FindConsumer(reqs).then(result=>{
        res.send({'code':200,'message':'found sucessfull','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
        
    })
}

const search_Consumer= async(req,res)=>{
    let reqs = req.body;
    console.log(reqs)
    consumerSer.searchConsumer(reqs).then(result=>{
        res.send({'code':200,'message':'found sucessfull','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
        
    })
}
const update_consumer = async (req,res)=>{
    let reqs = req.body;
    consumerSer.updateConsumer(reqs).then(result=>{
        res.send({'code':200,'message':'Updated Sucessful','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
    })
}
module.exports={create_Consumer,Find_Consumer,update_consumer,search_Consumer}