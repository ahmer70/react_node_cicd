const express = require('express')
const router=express.Router()
const {FAQS} =require('../Sequelize/sequelize')


router.put("/register",async(req,res)=>{
    
try {
    const{name,description}=req.body

    let data={
        name:name,
        description:description,

    }
    await FAQS.create(data)
    res.json({faqs:data})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.get("/getAll",async(req,res)=>{
    
try {
    let find=await FAQS.findAll()
    res.json({faqs:find})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.post("/update",async(req,res)=>{
    const{id,name,description}=req.body

 try {
     let find=await FAQS.findOne({
         where:{
             id:id
         }
     })
     if(find){
         await FAQS.update({
             name:name,
             description:description,
             
             
         },{where:{
            id:id
        }})
     }
     res.json({faqs:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })

 router.delete("/delete/:id",async(req,res)=>{

try {
     let find=await FAQS.findOne({
         where:{
             id:req.params.id
         }
     })
     if(find){
         await FAQS.destroy({where:{
            id:req.params.id}
        })
     }
     res.json({faqs:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })
module.exports = router