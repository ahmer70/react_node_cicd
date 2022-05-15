const express = require('express')
const router=express.Router()
const {Products} =require('../Sequelize/sequelize')


router.put("/register",async(req,res)=>{
    
try {
    const{short_name,long_name,short_drip,long_drip,image1,image2}=req.body

    let data={
        short_name:short_name,
        long_name:long_name,
        short_drip:short_drip,
        long_drip:long_drip,
        image1:image1,
        image2:image2

    }
    await Products.create(data)
    res.json({product:data})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.get("/getAll",async(req,res)=>{
    
try {
    let find=await Products.findAll()
    res.json({product:find})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.post("/update",async(req,res)=>{
    const{id,short_name,long_name,short_drip,long_drip,image1,image2}=req.body

 try {
     let find=await Products.findOne({
         where:{
             id:id
         }
     })
     if(find){
         await Products.update({
            short_name:short_name,
            long_name:long_name,
            short_drip:short_drip,
            long_drip:long_drip,
            image1:image1,
            image2:image2
             
         },{where:{
            id:id
        }})
     }
     res.json({product:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })

 router.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params

 try {
     let find=await Products.findOne({
         where:{
             id:req.params.id
         }
     })
     if(find){
         await Products.destroy({where:{
            id:req.params.id}
        })
     }
     res.json({product:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })
module.exports = router