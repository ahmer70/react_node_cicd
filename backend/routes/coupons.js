const express = require('express')
const router=express.Router()
const {Coupons} =require('../Sequelize/sequelize')


router.put("/register",async(req,res)=>{
    
try {
    const{coupon,institution}=req.body

    let data={
        name:coupon,
        institution:institution,

    }
    await Coupons.create(data)
    res.json({coupon:data})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.get("/getAll",async(req,res)=>{
    
try {
    let find=await Coupons.findAll()
    res.json({coupon:find})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.post("/update",async(req,res)=>{
    const{id,coupon,institution}=req.body

 try {
     let find=await Coupons.findOne({
         where:{
             id:id
         }
     })
     if(find){
         await Coupons.update({
             name:coupon,
             institution:institution,
             
             
         },{where:{
            id:id
        }})
     }
     res.json({coupon:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })

 router.delete("/delete/:id",async(req,res)=>{

try {
     let find=await Coupons.findOne({
         where:{
             id:req.params.id
         }
     })
     if(find){
         await Coupons.destroy({where:{
            id:req.params.id}
        })
     }
     res.json({coupon:find})
 } catch (error) {
     console.log(error.message)
     res.json({error:error.message})
 }
 
 })
module.exports = router