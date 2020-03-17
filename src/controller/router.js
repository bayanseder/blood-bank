const express = require('express')
const getdata=require('../database/queries/getdata')
const router = express.Router()

router.get('/doners',(req,res)=>{
    getdata.getdoners((err,response)=>{
        if(err) console.log('err')
        else res.send(response)
    })
})

router.get('/patients',(req,res)=>{
    getdata.getpatients((err,response)=>{
        console.log(response)
        res.send(response)
    })
})
module.exports=router