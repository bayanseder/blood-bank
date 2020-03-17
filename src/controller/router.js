const express = require('express')
const getdata=require('../database/queries/getdata')
const router = express.Router()
const err = require('./error')

router.get('/doners',(req,res)=>{
    getdata.getdoners((err,response)=>{
        if(err) console.log('err')
        else res.send(response)
    })
})

router.get('/patients',(req,res)=>{
    getdata.getpatients((err,response)=>{
        res.send(response)
    })
})

router.get('/blood-banks',(req,res)=>{
    getdata.getbloodbank((err,response)=>{
        if(err) console.log('err')
        else res.send(response)
    })
})

router.use(err.notFound)
router.use(err.serverErr)

module.exports=router