const fs = require('fs');
const {join}=require('path');
const connection = require('./connection');

const dbBuild = (cb)=>{
    const creatTable =fs.readFileSync(join(__dirname,'build.sql')).toString();
    const insertValue = fs.readFileSync(join(__dirname,'data.sql')).toString();
    return connection.query(creatTable,(err,res)=>{
        if(err) throw new Error("ERR DATABASE BUILD")
        else connection.query(insertValue,(err,res)=>{
            if(err) throw new Error("ERR INSERT VALUES")
            else console.log("YEAH, DONE")
        })
    })
}

dbBuild ;