const express = require('express')
const router=express.Router()
const jwt = require('jsonwebtoken');

const {Users} =require('../Sequelize/sequelize')
const bcrypt = require('bcrypt');


router.put("/register",async(req,res)=>{
    
try {
    const{name,email,password,pageName,coupon, institution}=req.body

    let data={ 
        name:name,
        email:email,
        pageName:pageName,
        coupon:coupon,
        institution:institution

    }
    data.password=await bcrypt.hash(password,10)
    await Users.create(data)
    res.json({user:data})
} catch (error) {
    console.log(error.message)
    res.json({error:error.message})
}

})

router.get("/getAll",async(req,res)=>{
    try {
        let find=await Users.findAll()
        res.json({user:find})
    } catch (error) {
        console.log(error.message)
        res.json({error:error.message})
    }
    
    })


router.get("/login",async(req,res)=>{
    console.log("asds",req.query)
    try {
        const {email ,password}=req.query
        let user=await Users.findOne({
            where:{
                email:email
            }
        })
        if (!user)res.status(200).json({error:"user not register"});


        let isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) throw new Error('Invalid login credentials');

  

        let token= jwt.sign({ _id: user.id, bucket: user.bucket_name, flag: 'P' }, "online", { expiresIn: '1d' });
        res.status(200).json({
            token,
            user,
            
        });
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router