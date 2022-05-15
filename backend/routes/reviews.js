const express = require('express')
const router=express.Router()
const {Reviews} =require('../Sequelize/sequelize')


router.put("/register",async(req,res)=>{
    
try {
    const{name,image,message}=req.body

    let data={
        name:name,
        img:image,
        message:message,
        userType:"App User"

    }
    await Reviews.create(data)
    res.json({reviews:data})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.get("/getAll",async(req,res)=>{
    
try {
    let find=await Reviews.findAll()
    res.json({reviews:find})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.post("/update",async(req,res)=>{
    const{id,name,image,message}=req.body

 try {
     let find=await Reviews.findOne({
         where:{
             id:id
         }
     })
     if(find){
         await Reviews.update({
             name:name,
             img:image,
             message:message,
             userType:"App User",
             
         },{where:{
            id:id
        }})
     }
     res.json({reviews:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })

 router.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params

 try {
     let find=await Reviews.findOne({
         where:{
             id:req.params.id
         }
     })
     if(find){
         await Reviews.destroy({where:{
            id:req.params.id}
        })
     }
     res.json({reviews:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })
module.exports = router