const providerCtrl =require("../services/provider_service");

const create_provider = (req,res)=>{
    let reqs=req.body;
    providerCtrl.CreateProvider(reqs).then(result=>{
        res.send({'code':200,'message':'Created sucessfull','data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message})
    })
}

const Find_provider = async (req,res)=>{
    let reqs = req.body

    providerCtrl.findProvider(reqs).then(result=>{
        res.send({'code':200,'message':"file found",'data':result})
    },err=>{
        res.send({'code':err.code,'message':err.message,'err':err})
    })
}

// const update_provider = async (req,res)=>{
//     let reqs = req.query
//     providerCtrl.UpdateProvider(reqs).then(result=>{
//         res.send({'code':200,'message':'Created sucessfull','data':result})
//     },err=>{
//         res.send({'code':err.code,'message':err.message,'err':err})
//     })
// }
module.exports={create_provider,Find_provider}

