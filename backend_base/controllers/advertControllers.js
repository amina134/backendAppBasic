const advertSchema = require('../model/advert')

const addAdvert=async(req,res)=>{
    try {
        const newAdvert=new advertSchema(req.body)
        await newAdvert.save()
        res.status(200).json({msg:'u added new advert',newAdvert})
    } catch (error) {
        console.error(error);
        res.send('u have a problem')
    }
}

const getAdvert=async (req,res)=>{
  try {
    const advert=await  advertSchema.findById(req.params.id)
    if (advert)
      {res.status(200).json(advert)}
    else{
       res.status(404).json({message:"advert not found"}) 
    }
    
  } catch (error) {
    res.status(500).json({message:"error getting advert"})
  }
}

const updateAdvert=async(req,res)=>{
    try {
        const advertId=req.params.id
        const updatedAdvert =await advertSchema.findByIdAndUpdate(advertId,req.body)
        if (updatedAdvert){
            console.log("data updated")
            res.status(200).json({msg:'u added new advert',updateAdvert})
        }
        else{
            res.status(404).json({ message: 'Advert not found' })
        }
    } catch (error) {
        console.error("there is an error")
    }
}

const deleteAdvert=async(req,res)=>{
    try {
        const advertId=req.params.id
        const deletedAdvert= await advertSchema.findByIdAndDelete(advertId,req.body)
        if (deleteAdvert){
            console.log("deleted")
        }
    } catch (error) {
        console.error("not  deleted")
    }
}

// get all 
const getAllAdvert=async(req,res)=>{
    try {
        const adverts=await advertSchema.find()
        res.status(200).json(adverts)
    } catch (error) {
        console.error("mission failed")
    }
}
module.exports={addAdvert,getAdvert,updateAdvert,deleteAdvert,getAllAdvert}