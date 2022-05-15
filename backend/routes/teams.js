const express = require('express')
const router=express.Router()
const {Teams} =require('../Sequelize/sequelize')


router.put("/register",async(req,res)=>{
    
try {
    const{name,image,designation,facebook,instagram,twitter,behance}=req.body

    let data={
        name:name,
        img:image,
        designation:designation,
        facebook:facebook,
        instagram:instagram,
        twitter:twitter,
        behance:behance

    }
    await Teams.create(data)
    res.json({team:data})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.get("/getAll",async(req,res)=>{
    
try {
    let find=await Teams.findAll()
    res.json({team:find})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.post("/update",async(req,res)=>{
    const{id,name,image,designation,facebook,instagram,twitter,behance}=req.body

 try {
     let find=await Teams.findOne({
         where:{
             id:id
         }
     })
     if(find){
         await Teams.update({
            name:name,
            img:image,
            designation:designation,
            facebook:facebook,
            instagram:instagram,
            twitter:twitter,
            behance:behance
             
         },{where:{
            id:id
        }})
     }
     res.json({team:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })

 router.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params

 try {
     let find=await Teams.findOne({
         where:{
             id:req.params.id
         }
     })
     if(find){
         await Teams.destroy({where:{
            id:req.params.id}
        })
     }
     res.json({team:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })
module.exports = router