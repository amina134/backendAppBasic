const express=require('express')
const advertRoute=express.Router()
const {addAdvert,getAdvert,updateAdvert,deleteAdvert,getAllAdvert}=require('../controllers/advertControllers')
advertRoute.use(express.json())


advertRoute.post('/addAdvert',addAdvert)

advertRoute.get('/getAdvert/:id',getAdvert)

advertRoute.put('/updateAdvert/:id',updateAdvert)

advertRoute.delete('/deleteAdvert/:id',deleteAdvert)

advertRoute.get('/getAllAdvert',getAllAdvert)
module.exports=advertRoute