const providerUser=require('../models/reg_provider_model')

const CreateProvider = async(req,res)=>{
    try{
        return await providerUser.create(req)
    }catch(err){
        return ({'code':err.code,'message':err.message})
    }
}

const findProvider = async (req,res)=>{
    try{
        console.log((req))
        return await providerUser.find(req)
        }catch(err){
            return({'code':err.code,'message':err.message})
        }
    }


// const UpdateProvider = async (req,res)=>{
    
//     try{let update = await providerUser.findById(req.params['id']);
//       let body = req.body; let get =Object.assign(update,body);
//       return await update.save();}
//   catch (err){ throw ({'err':err,'message':req.files});}
// };
module.exports={CreateProvider,findProvider};

